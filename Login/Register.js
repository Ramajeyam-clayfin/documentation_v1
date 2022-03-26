import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate("Home")
          }
        })
    
        return unsubscribe
      }, [])

    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password, name)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
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