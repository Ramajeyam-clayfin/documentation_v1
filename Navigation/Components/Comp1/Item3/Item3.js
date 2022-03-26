import React, {useContext} from "react"
import { Datas } from "../../../../Context/Context"

import { View, Text, StyleSheet, Pressable, Linking, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native"
import Data  from "./Item3data.json";
import WebView from "react-native-webview";


export const Item3 = () => {
  const { number} = useContext(Datas)
  const temp = Data.filter(obj => obj.id === number )
  const loading = () => {
    return(
      <ActivityIndicator  
        size="large" 
        color="#61dafb"
        style={{flex:0.5, justifyContent: 'center', alignItems:"center"}} 
      
      />
    )
  }
    return(
      
      <View style={styles.container1}>
        {temp.map((obj, index)=>(
          <React.Fragment key={obj.id}>
            <Text key={obj.id} style={{color:"white", fontSize:20, marginBottom:10}}>{obj.name}</Text>
            <View style={styles.container2}>
              <WebView
                    source={{ uri: obj.link }}
                    renderLoading={loading}
                    startInLoadingState={true}
                  />
            </View>
            <View style={styles.container3}>
              <TouchableOpacity onPress={()=>Linking.openURL(obj.link)}>
                <Text style={{color:"black", fontSize:20}}>Try Out Example</Text>
              </TouchableOpacity>
            </View>
          </React.Fragment>
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
      backgroundColor:"white", 
      borderRadius:15, 
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