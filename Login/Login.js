import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator} from "react-native"
import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect } from 'react'
import { Validation } from "./Validation"
import { Datas } from "../Context/Context";
import { auth, getData } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
    const { userid, setUserid ,setpasserror, emailerror, passerror, setLogin, trigger , setTrigger} = React.useContext(Datas)

    const navigation = useNavigation()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, SetLoading] = useState(false)

    const Navi = () => {
     
      const unsubscribe = auth.onAuthStateChanged(usered => {
        if (usered) {
          navigation.navigate("Home")
          // navigation.reset({
          //   index: 0,
          //   routes: [{ name: 'Home' }],
          // })
        }
        // else navigation.navigate("Login")
      })
  
      return unsubscribe
    }

    
    const handleLogin = () => {
      SetLoading(true);
      auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
          SetLoading(false)
          setTrigger(!trigger)
          const user = userCredentials.user
          console.log('Logged in with:', user.email)
          setEmail("")
          setPassword("")
          setpasserror("") 
          Navi()
        })
        .catch(error => {
          SetLoading(false);
          if (error.code === 'auth/invalid-email') {
            setpasserror('Invalid-email !')
          }
      
          if (error.code === 'auth/user-not-found') {
            setpasserror('user-not-found ! Try Signup')
          }
          if (error.code === 'auth/wrong-password') {
            setpasserror('wrong-password')
          }
        })
    }


    
    return(
        <View style={styles.container}>
          {
            loading ? ( <ActivityIndicator  
              size="large" 
              color="#61dafb"
              style={{flex:1, justifyContent: 'center', alignItems:"center"}} 
              // animating={loading}
          
            />) : (
            <>
              {/* <StatusBar style="auto" /> */}
              <Image style={styles.image} source={require("../Images/logo.png")} />
              <Text style={styles.header}>Welcome to React</Text>
          
            
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  value={email}
                  placeholderTextColor="#20232a"
                  onChangeText={(email) => setEmail(email)}
                />
                
              </View>
              {emailerror.length ?
                    <Text style={{color:"red", marginBottom: 10,}}>{emailerror}</Text> :  null
                  }
                  
          
              <View style={styles.inputView}>
                  <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  value={password}
                  placeholderTextColor="#20232a"
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
                  />
                  
              </View>
              {passerror.length ?
                    <Text style={{color:"red", marginBottom: 10,}}>{passerror}</Text> :  null
                  }
          
              <TouchableOpacity>
                  <Text style={styles.forgot_button}>Forgot Password?</Text>
              </TouchableOpacity>
          
              <TouchableOpacity style={styles.loginBtn} onPress={()=>handleLogin()}>
                  <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.regisBtn} onPress={()=>navigation.navigate("Register")}>
                  <Text style={[styles.loginText,{color:"white"}]}>SIGNUP</Text>
              </TouchableOpacity>
            </>
            )
          }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#20232a",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
    //   marginBottom: 5,
    },
   
    inputView: {
      backgroundColor: "#fff",
    //   borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
    //   alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      // marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color:"white"
    },
   
    loginBtn: {
      width: "80%",
    //   borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#61dafb",
    },
    header:{
        height: 30,
      marginBottom: 30,
      color:"white",
      fontSize:23
    },
    regisBtn: {
      width: "80%",
    //   borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      // backgroundColor: "white",
      borderColor:"#61dafb",
      borderWidth:4
    },
    loginText:{
      fontSize:20,
      fontWeight:"bold"
    }
  });

