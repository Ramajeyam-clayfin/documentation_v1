import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import { Ionicons, } from "@expo/vector-icons";
import React from 'react';
import { Datas } from './Context/Context';


export const Navbar = ({navigation}) => {
  const { setLogin} = React.useContext(Datas)

    return(
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.navbar}>
          <Ionicons
            name="ios-menu"
            size={36}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
          <Image style={{height:35, width:35}} resizeMode="cover" source={require('./Images/logo.png')}/>
          <Text style={styles.headertext}>React Native</Text>
          <View style={styles.searchicon}>
            <Ionicons 
                name="search"
                size={26}
            />
          </View>
          <View style={styles.logout}>
          <Ionicons 
                  name="log-out-outline"
                  size={30}
                  color="white"
                  onPress={() => {setLogin(false) ; navigation.navigate("Home") }}
              />
          </View>
            
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:0.08,
  },
  headertext:{
    color:'white',
    fontSize:20,
    left:5,
    fontWeight:"bold"
  },
  navbar:{
    flex:1,
    flexDirection:"row", 
    backgroundColor:"#20232a",
    width:"auto",
    alignItems:"center",
    paddingLeft:10
  },
  searchicon:{
    width:35, 
    height:30,  
    backgroundColor:"white", 
    marginLeft:80,
    alignItems:"center",
    borderRadius:7

  },
  logout:{
    color:"white",
    marginLeft:15
  }
});
