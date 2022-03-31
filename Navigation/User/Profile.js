import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons, } from "@expo/vector-icons";
import React from 'react'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Profile = () => {
  return (
    <View style={styles.container1}>
        <View style={styles.container2}>
            {/* <View style={styles.innercircle}> */}
            <Ionicons 
                name="person-circle-outline"
                size={250}
                color="black"
                // onPress={() => navigation.navigate("User")}
            />
            {/* </View> */}
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
  )
}

export default Profile

const styles = StyleSheet.create({
    container1:{
        flex:1,
       
        // justifyContent:"center",
        // alignItems:"center"
        backgroundColor:"#ffffff"
    },
    text:{
        color:"black",
        fontSize:40,
        alignSelf:"center",
        marginBottom: 8
    },
    text2:{
        color:"black",
        fontSize:15,
        alignSelf:"center"
    },
    container2: {
        flex:0.7,
        top:38,
        // backgroundColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:35
        
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
        backgroundColor:"#8080ff",
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        margin: 10,
        marginBottom: 50,
        borderRadius:30
    },
    regisBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ffff",
        borderColor:"#61dafb",
        borderWidth:4
      },
      
    loginText:{
        fontSize:20,
        fontWeight:"bold",
        color:"black"
      }
})