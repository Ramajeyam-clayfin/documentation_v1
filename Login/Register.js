

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react'
import { Datas } from "../Context/Context";
import { useDispatch } from "react-redux";
import { auth, getData } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { add_user, initialize } from "../Redux/Actions";

const Register = () => {

  const { setUserid ,setpasserror, emailerror, passerror, setLogin, trigger , setTrigger} = React.useContext(Datas)

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [user , setUser ] = useState([])

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const getusers = (users) => setUser(users)

    useEffect(()=>{ dispatch(initialize(user)) },[user])

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate("Home")
            setEmail("")
            setPassword("")
            getData(getusers)
            
            
          }
          else navigation.navigate("Register")
        })
    
        return unsubscribe
        
      }, [])

    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password )
          .then(userCredentials => {
            const user = userCredentials.user;
            const useruid = auth.currentUser.uid
            dispatch(add_user(useruid, name, email))
            setUserid(useruid)
            setTrigger(!trigger)
            setpasserror("") 
            console.log('Registered with:', user.email);
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              setpasserror('That email address is already in use!')
            }
        
            if (error.code === 'auth/invalid-email') {
              setpasserror('That email address is invalid!')
            }
            if (error.code === 'auth/weak-password') {
              setpasserror('weak-password')
            }

          })
      }

  return (
    <View style={styles.container1}>
        <StatusBar style="auto" />
        <Text style={styles.header}>Register</Text>
        
           
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#20232a"
            onChangeText={(name) => setName(name)}
          />
          
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#20232a"
            onChangeText={(email) => setEmail(email)}
          />
          
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#20232a"
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
          />
          
        </View>
        {passerror.length ?
                   <Text style={{color:"red", marginBottom: 10,}}>{passerror}</Text> :  null
                }
        <TouchableOpacity style={styles.loginBtn} onPress={()=>handleSignUp()}>
                <Text style={styles.loginText}>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.forgot_button}>Back to Login Page</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container1:{
        flex:1,
        top:38,
        backgroundColor:"#20232a",
        alignItems: "center",
      justifyContent: "center",
    },
    header:{
        height: 30,
      marginBottom: 30,
      color:"white",
      fontSize:23

    },
    inputView:{
        backgroundColor: "#fff",
        //   borderRadius: 30,
          width: "70%",
          height: 45,
          marginBottom: 20,
        //   alignItems: "center",

    },
    TextInput:{
        height: 50,
        flex: 1,
        padding: 10,

    },
    loginBtn: {
        width: "70%",
      //   borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom:20,
        backgroundColor: "#61dafb",
      },
      loginText:{
        fontSize:20,
        fontWeight:"bold"
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
        color:"white"
      },
})