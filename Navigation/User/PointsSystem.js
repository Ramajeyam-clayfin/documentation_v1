import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Navbar } from '../../Navbar'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Ionicons, } from "@expo/vector-icons";
import Data from "../Components/HomeData.json"
import { useSelector } from 'react-redux';


const MyProgress = () => {
  const navigation = useNavigation()
  const user = useSelector(state => state.userData)
  const filters = user.map(obj => obj.Datas.Basics)
  const names = Data.map(obj => obj.title)

  let object1
  let array1 =[]
  let array2 = []

  for(let keys in filters){
     object1 = filters[keys]

    for(let keys in object1){
      names.forEach(obj => {
        if(obj === keys){
          array2 = [...array2, obj]
          array1 = [ {...array1[0] , [obj] : object1[keys]} ]
        }
        
      })
   }
  }

  const topic =({ item }) => {
    return(
      <>
      {
        array2.map(obj1 => (
          <View style={[styles.card,]}>
              <View >
                <Text style={[styles.cardText,{fontWeight:"bold", fontSize:20, color:"#61dafb", marginBottom:10}]}>{obj1} :</Text>
              </View>
              <View style={{flexDirection:"row"}}  >
                    
                <View style={{alignSelf:"center"}}>
                  <Progress.Bar 
                    progress={((item[obj1])/100)} 
                    width={200} 
                    color={item[obj1] === 30 ? "#ff0000" : (item[obj1] === 60 ? "#ff5c33" : (item[obj1] === 90 ? "#00cc66" : "#ffff") )  } 
                  />
                </View>

                <View style={{alignSelf:"flex-end"}}>
                  <Text  style={[styles.cardText,{fontWeight:"bold", marginLeft:30}]}>{item[obj1]} %</Text>
                </View>

              </View>
          </View>
        ))
      }
      </>
    )
  }
  


  return (
    <View style={styles.container1}>
      <StatusBar style="auto" />
      <Navbar navigation={navigation}/>
      <View style={{flex:1}}>
        <View style={styles.container2}>
          <Text style={styles.heading}>MY PROGRESS</Text>

          <FlatList
              data={array1}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => topic({ item })}
          />

          {/* <View style={[styles.card1,{marginBottom:0, flex:0.4}]}>
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
          </View> */}
        </View>
      </View>
      
    </View>
  )
}

export default MyProgress

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
        backgroundColor:"#000000"
    },
    cardText :{
        // alignSelf:"center",
        fontWeight:"bold",
        fontSize:18,
        color:"white"
    }
})