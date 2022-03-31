import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons, } from "@expo/vector-icons";
import React from 'react'
// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Navbar } from '../../Navbar';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container1}>
        <StatusBar style="auto" />
        <Navbar navigation={navigation}/>
        <View style={{flex:1}}>
        <View style={styles.container2}>
            <Ionicons 
                name="person-circle-outline"
                size={250}
                color="#808080"
                // onPress={() => navigation.navigate("User")}
            />
        </View>
        {/* <View style={styles.line}><View></View></View> */}
        <View style={styles.container3}>
            <View>
                <Text style={styles.text}>Ramajeyam</Text>
                <Text style={styles.text2}>ramajeyam@gmail.com</Text>
            </View>
            <TouchableOpacity 
                style={styles.regisBtn}
                // onPress={()=>navigation.navigate("Register")}
            >
                  <Text style={styles.loginText}>CHANGE PASSWORD</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.regisBtn} 
                // onPress={()=>navigation.navigate("Register")}
            >
                  <Text style={styles.loginText}>LOGOUT</Text>
              </TouchableOpacity>
        </View>
        </View>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container1:{
        flex:1,
       top:35,
        // justifyContent:"center",
        // alignItems:"center"
        backgroundColor:"#ffffff"
    },
    text:{
        color:"white",
        fontSize:40,
        alignSelf:"center",
        marginBottom: 8,
        fontWeight:"bold",
    },
    text2:{
        color:"white",
        fontSize:15,
        alignSelf:"center"
    },
    container2: {
        flex:1,
        // top:38,
        // backgroundColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",
        // marginBottom:35
        
    },
    innercircle:{
        backgroundColor:"#61dafb",
        borderRadius: 50
    },
    line : {
        flex:0.01, 
        width : "90%", 
        backgroundColor:"black", 
        alignSelf:"center",
        borderRadius:5
    },
    container3: {
        flex:1,
        width: "90%",
        backgroundColor:"#404040",
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        margin: 10,
        marginBottom: 90,
        borderRadius:30,
        borderColor:"#61dafb",
        borderWidth:4
        
        // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    regisBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#61dafb",
        borderColor:"#000000",
        borderWidth:1
      },
      
    loginText:{
        fontSize:15,
        // fontWeight:"bold",
        color:"black"
      }
})