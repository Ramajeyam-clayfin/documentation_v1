import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableHighlight,   } from 'react-native';
import { Navbar } from './Navbar';
import React, {useEffect, useContext, useState} from 'react'
import { Datas } from './Context/Context';
import { auth, getData } from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import { createData } from './Redux/Actions';
import { initialize } from './Redux/Actions';


export const Home = (props) => {

    const { navigation } = props
    const {  login, trigger, userid } = useContext(Datas)
    
    const [user , setUser ] = useState([])
    const userData = useSelector(state => state?.userData)
    const dispatch = useDispatch()

    const getusers = (users) => setUser(users)
    getData(getusers)

    
    // console.log("userData :", userData)
    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          const useruid = auth?.currentUser.uid
      dispatch(initialize(user, useruid))
          dispatch(createData(useruid))
        }
      })
  
      return unsubscribe
      
    },[trigger])
    
    return(
      <View style={[styles.container,{ top: login ? 35 : 0}]}>
      
        <StatusBar style="auto" />
        <Navbar navigation={navigation}/>
        <View style={{flex:1, justifyContent: "center", marginBottom: 75  }}>
                <Image style={{height:250, width: Dimensions.width, marginBottom: 25 }} resizeMode="cover" source={require('./Images/image1.png')}/>
                <Text style={{color:"white", fontSize:30, marginLeft: 20}}>Learn once, </Text>
                <Text style={{color:"white", fontSize:30, marginLeft: 20}}>write anywhere.</Text>
                <TouchableHighlight 
                  style={styles.start_btn}
                  underlayColor="#f6affb"
                  onPress={()=>navigation.navigate("Guides")}
                  >
                  <Text>GET STARTED</Text>
                </TouchableHighlight>
                {/* <TouchableHighlight 
                  style={styles.learn_btn}
                  onPress={()=>navigation.navigate("Components")}
                  >
                  <Text style={{ color:'#61dafb', fontSize: 20}}>{"Learn Basics >"}</Text>
                </TouchableHighlight> */}
        </View> 
      </View>
     
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
   
  },
  start_btn:{
    backgroundColor:"#61dafb",
    width: "90%",
    height: 50,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center"
  },
  learn_btn:{
    width: "90%",
    height: 50,
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
   
  }
});
