import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ScrollView, Dimensions, Pressable, Linking } from 'react-native';
import { Navbar } from '../../../Navbar';
import Carousel from 'react-native-snap-carousel'

export const Comp1 = (props) => {
    const { navigation } = props
    const [page, setPage] = useState(0);

    const Item0 = () => {
      return(
        
        <View style={styles.container2}>
          <Text style={{color:"#61dafb", fontSize:30, marginBottom:10}}>View</Text>
          <View style={{flex:1, alignContent:"center",alignSelf:"center", backgroundColor:"white", padding:10, borderRadius:15,  alignItems:"center", justifyContent:"center"}}>
          <Text style={{color:"black", fontSize:20,}}>The most fundamental component for building a UI, 
          View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. 
          View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, 
          {`<div>`}, android.view, etc..</Text>
            </View>
           
        </View>
 
      )
    }

    const Item1 = () => {
      return(
        
        <View style={styles.container2}>
          <Text style={{color:"#61dafb", fontSize:20, marginBottom:10}}>Functional Component Example:</Text>
          <View style={{ flex:0.8, alignContent:"center",alignSelf:"center", backgroundColor:"white", padding:10, borderRadius:15, alignItems:"center", justifyContent:"center"}}>
          <Text style={{color:"black", fontSize:10}}>{`import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;`}</Text>
            </View>
            <View style={{height:50, width: "90%", alignSelf:"center" ,backgroundColor:"#61dafb", marginTop:15, alignItems:"center", justifyContent:"center"}}>
              <Pressable onPress={()=>Linking.openURL("https://snack.expo.dev/@ramajeyam/view-function-component-example")} >
                <Text style={{color:"white", fontSize:20}}>Try Out Example</Text>
              </Pressable>
            </View>
           
        </View>
 
      )
    }
    const Item2 = () => {
      return(
        
        <View style={styles.container2}>
          <Text style={{color:"#61dafb", fontSize:20, marginBottom:10}}>Class Component Example:</Text>
          <View style={{ flex:0.8, alignContent:"center",alignSelf:"center", backgroundColor:"white", padding:10, borderRadius:15, alignItems:"center", justifyContent:"center"}}>
          <Text style={{color:"black", fontSize:10}}>{`import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default App;`}</Text>
            </View>
            <View style={{height:50, width: "90%", alignSelf:"center" ,backgroundColor:"#61dafb", marginTop:15, alignItems:"center", justifyContent:"center"}}>
              <Pressable onPress={()=>Linking.openURL("https://snack.expo.dev/@ramajeyam/view-class-component-example")}>
                <Text style={{color:"white", fontSize:20}}>Try Out Example</Text>
              </Pressable>
            </View>
           
        </View>
 
      )
    }
   
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Navbar navigation={navigation}/>
            
            <View style={{flex:1, justifyContent:"center"}}>
              <Pressable
              onPress={()=>{page === 2 ? setPage(0) : setPage(page+1)}}
              >
                { page === 0 ? <Item0/> 
                  : (page === 1 ? <Item1/> 
                    : (page === 2 ? <Item2/> 
                      : null)) }
                
              </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:35
  },
  container2 : {
    // flex:1, 
    height: 550,
    backgroundColor: '#333333', 
    margin:20, 
    borderRadius:20, 
    padding:20,
    
  }
});
