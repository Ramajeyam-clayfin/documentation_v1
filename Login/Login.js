import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from "react-native"
import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect } from 'react'
import { Validation } from "./Validation"
import { Datas } from "../Context/Context";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import Register from "./Register";

export const Login = () => {
    const { setemailerror,setpasserror, emailerror, passerror, setLogin} = React.useContext(Datas)

    const navigation = useNavigation()
    // console.log("navigation",navigation)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [trigger , setTrigger ] = useState(true)

    useEffect(() => {
     
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.navigate("Home")
        }
      })
  
      return unsubscribe
    }, [trigger])

    // const loginhandler = () => {
    //     let result = Validation(email, password);
    //     setemailerror(result.errormessageuser)
    //     setpasserror(result.errormessagepass)
    //     handleLogin()
    //     result.errormessageuser.length || result.errormessagepass.length ? setLogin(false) : setLogin(true)

    // }
    
    const handleLogin = () => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
          setEmail("")
          setPassword("")
          setpasserror("") 
          setTrigger(!trigger)
        })
        .catch(error => {
          // let a = (error.message).slice(10);
          let b = (error.message).split("/");
          let c = b[1].slice(0, -2)
          setpasserror(c)  
          console.log(c)
        })
    }

    

    return(
        <View style={styles.container}>
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

