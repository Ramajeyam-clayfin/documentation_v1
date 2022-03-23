import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { Navbar } from './Navbar';
import { Login } from './Login/Login';
import React from 'react'
import { Datas } from './Context/Context';
// import Header from './Images/header_logo.svg';


export const Home = (props) => {
    const { navigation } = props
    const {  login} = React.useContext(Datas)

    return(
        <View style={[styles.container,{ top: login ? 35 : 0}]}>
            {login ? 
            <>
            
              <StatusBar style="auto" />
              <Navbar navigation={navigation}/>
              <View style={{flex:1, justifyContent: "center", marginBottom: 75  }}>
                      <Image style={{height:250, width: Dimensions.width, marginBottom: 25 }} resizeMode="cover" source={require('./Images/image1.png')}/>
                      <Text style={{color:"white", fontSize:30, marginLeft: 20}}>Learn once, </Text>
                      <Text style={{color:"white", fontSize:30, marginLeft: 20}}>write anywhere.</Text>
                      {/* <Header />  */}
                      <TouchableHighlight 
                        style={styles.start_btn}
                        underlayColor="#f6affb"
                        onPress={()=>navigation.navigate("Guides")}
                        >
                        <Text>GET STARTED</Text>
                      </TouchableHighlight>
                      <TouchableHighlight 
                        style={styles.learn_btn}
                        // underlayColor="#ffff"
                        onPress={()=>null}
                        >
                        <Text style={{ color:'#61dafb', fontSize: 20}}>{"Learn Basics >"}</Text>
                      </TouchableHighlight>
              </View> 
              
            </> : 
              <Login/>
             }
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
