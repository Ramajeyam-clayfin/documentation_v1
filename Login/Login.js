import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native"
import { StatusBar } from 'expo-status-bar';
import React,{useState, useContext } from 'react'
import { Validation } from "./Validation"
import { Datas } from "../Context/Context";

export const Login = () => {
    const { setemailerror,setpasserror, emailerror, passerror} = useContext(Datas)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginhandler = () => {
        let result = Validation(email, password);
        setemailerror(result.errormessageuser)
        setpasserror(result.errormessagepass)

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
                placeholderTextColor="#20232a"
                onChangeText={(email) => setEmail(email)}
                />
                {/* </View>
                {emailerror.length > 0 &&
                  <Text>{emailerror}</Text>
                }
                <View> */}
            </View>
        
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#20232a"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                />
            </View>
        
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.loginBtn} onPress={loginhandler()}>
                <Text style={styles.loginText}>LOGIN</Text>
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
    //   top:15
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
      marginLeft: 20,
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
    }
  });

  const validtaion = (email, password) => {
    let errormessageuser = ''
    let errormessagepass = ''
    if(email === undefined || password === undefined ){
        errormessagepass ='Password is Required'
        errormessageuser = 'Username is Required'
    }
    else if(email.toLowerCase() === 'manager'){
        if(password === 'manager'){
            errormessagepass =''
        }
        else errormessagepass = 'Username and Password did not match'
    }
    else if(  (email.toLowerCase() === "jeyamjeyam6@gmail.com" && password === "jeyamjeyam")
            ||(email.toLowerCase() === "ramajeyam@clayfin.com" && password === "ramajeyam") )
        {
                errormessagepass =''
        }
            else errormessagepass = 'Username and Password did not match'

    return { errormessageuser: errormessageuser, errormessagepass: errormessagepass }
}
