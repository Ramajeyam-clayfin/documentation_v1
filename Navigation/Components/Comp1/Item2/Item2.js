import React, {useContext} from "react"
import { Datas } from "../../../../Context/Context"
import { View, Text, StyleSheet, Pressable, Linking, TouchableOpacity } from "react-native"
import {Data} from './Item2data'

export const Item2 = () => {
  const { number} = useContext(Datas)
  const temp = Data.filter(obj => obj.id === number )
    return(
      
      <View style={styles.container1}>
        {temp.map((obj, index) => (
          <>
            <Text key={index} style={{color:"#61dafb", fontSize:20, marginBottom:10}}>{obj.name}</Text>
            <View style={styles.container2}>
              <Text style={{color:"black", fontSize:10}}>{ obj.content}</Text>
            </View>
            <View style={styles.container3}>
              <TouchableOpacity onPress={()=>Linking.openURL(obj.link)} >
                <Text style={{color:"white", fontSize:20}}>Try Out Example</Text>
              </TouchableOpacity>
            </View>
          </>
        ))}
        
         
      </View>

    )
  }

  const styles = StyleSheet.create({
    container1 : {
      // flex:1, 
      height: 550,
      backgroundColor: '#333333', 
      margin:20, 
      borderRadius:20, 
      padding:20,
      
    },
    container2: { 
      flex:0.8, 
      alignContent:"center",
      alignSelf:"center", 
      backgroundColor:"white", 
      padding:10, 
      borderRadius:15, 
      alignItems:"center", 
      justifyContent:"center",
      borderColor:"#61dafb",
      borderWidth:4
  },
  container3:{
    height:50, 
    width: "90%", 
    alignSelf:"center" ,
    backgroundColor:"#61dafb", 
    marginTop:15, 
    alignItems:"center", 
    justifyContent:"center"
  }
  });