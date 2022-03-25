
import React,{useContext} from "react"
import { View, Text, StyleSheet } from "react-native"
import Data from './Item1data.json'
import { Datas } from "../../../../Context/Context"
export const Item1 = () => {
    const { number} = useContext(Datas)
    const temp = Data.filter(obj => obj.id === number )

    return(
      
      <View style={styles.container1}>
        {temp.map((obj, index) => (
            <>
                <Text key={index} style={{color:"#61dafb", fontSize:30, marginBottom:10}}>{obj.name}</Text>
                <View style={styles.container2}>
                    <Text style={{color:"black", fontSize:20,}}>{obj.content}</Text>
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
    container2:{
      flex:1, 
      alignContent:"center",
      alignSelf:"center", 
      backgroundColor:"white", 
      padding:10, 
      borderRadius:15,  
      alignItems:"center", 
      justifyContent:"center",
      borderColor:"#61dafb",
      borderWidth:4
    }
  });