import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Navbar } from '../../Navbar'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const PointsSystem = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container1}>
      <StatusBar style="auto" />
      <Navbar navigation={navigation}/>
      <View style={{flex:1}}>
        <View style={styles.container2}>
          <Text style={styles.heading}>POINTS DISTRIBUTION</Text>
          <View style={[styles.card1,{marginBottom:0, flex:0.4}]}>
            <Text style={[styles.h1, {fontWeight:"bold", color:"#61dafb", fontSize:30, marginBottom:10}]}>Guides :</Text>
            <Text style={[styles.h1,{marginBottom:20, alignSelf:"center"}]}>Introduction : ( 1 - 100 ) .</Text>
          </View>
          <View style={[styles.card1,{flex:1.5, flexShrink:1}]}> 
            <Text style={[styles.h1, {fontWeight:"bold", color:"#61dafb", fontSize:30, marginBottom:10, marginTop:5}]}>Components :</Text>
            <Text style={[styles.h1,{marginBottom:2}]}>Total Components : 24</Text>
            <Text style={[styles.h1, {color:"red", fontSize:12, marginBottom:10}]}>( * Each Components contains 1 ponit each, total 24 Points )</Text>
            <Text style={[styles.h1,{marginBottom:10}]}>Introduction : 1 Point</Text>
            <Text style={[styles.h1,{marginBottom:10}]}>Examples : 1 Point</Text>
            <Text style={[styles.h1,{marginBottom:2}]}>Total : 26 Points</Text>
            <Text style={[styles.h1,  {color:"red", fontSize:12, marginBottom:20}]}>( * Total Percentage of Componenets is calculated of how much points you earned )</Text>
          </View>
        </View>
      </View>
      
    </View>
  )
}

export default PointsSystem

const styles = StyleSheet.create({ 
    container1:{
        flex:1,
        top:38,
        // justifyContent:"center",
        // alignItems:"center"
        backgroundColor:"black"
    },
    heading:{
      color:"black",
      fontSize:30,
      alignSelf:"center",
      marginTop:10,
      fontWeight:"bold"
    },
    container2:{
      flex:1,
      justifyContent:"center",
      borderWidth:4,
      borderColor:"#262626",
      margin:10,
      marginBottom:50,
      borderRadius:25,
      backgroundColor:"#61dafb"
    },
    card1:{
      // flex:1,
      borderWidth:4,
      borderColor:"#ffff",
      padding:10,
      borderRadius:25,
      justifyContent:"center",
      // alignItems:"center",
      margin:20,
      backgroundColor:'#000000',
      // marginBottom:150

    },
    h1:{
      color:"white",
      fontSize:20
    }
})