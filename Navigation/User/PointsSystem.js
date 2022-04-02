import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Navbar } from '../../Navbar'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Ionicons, } from "@expo/vector-icons";
import Data from "../Components/HomeData.json"
import { useSelector } from 'react-redux';


const PointsSystem = () => {
  const navigation = useNavigation()
  const user = useSelector(state => state.userData)
  const filters = user.map(obj => obj.Datas.Basics)
  const names = Data.map(obj => obj.title)
  names.forEach(obj => console.log("obj 1 : ",obj))
  filters.forEach(obj => console.log("obj 2 : ",obj.ActivityIndicator))
  const filtered = names.forEach(obj1 => filters.map(obj2 => obj2[obj1] === obj1))
  console.log("filter :", filtered)
  // for(keys as names){

  // }

  


  return (
    <View style={styles.container1}>
      <StatusBar style="auto" />
      <Navbar navigation={navigation}/>
      <View style={{flex:1}}>
        <View style={styles.container2}>
          <Text style={styles.heading}>POINTS DISTRIBUTION</Text>



          <View style={[styles.card,]}>
                <View style={{alignSelf:"center"}}>
                    <Text style={styles.cardText}>View</Text>
                </View>
          <View style={{flexDirection:"row"}}  >
                
                
                <View style={{alignSelf:"center"}}>
                  <Progress.Bar progress={0.3} width={200} />
                </View>

                <View style={{alignSelf:"flex-end"}}>
                    <Text  style={styles.cardText}>80 %</Text>
                </View>

            </View>
            </View>
          
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
      backgroundColor:'#333333',
      // marginBottom:150

    },
    h1:{
      color:"white",
      fontSize:20
    },
    card:{
        flexDirection:"column",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingRight:50,
        // paddingBottom: 10,
        borderWidth:3,
        borderColor:"black",
        borderRadius:30,
        padding: 5,
        marginBottom: 5,
        marginTop:10,
        width:"90%",
        alignSelf:"center",
    },
    cardText :{
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:18
    }
})