import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import { Ionicons, } from "@expo/vector-icons";

export const Navbar = ({navigation}) => {
    // const { navigation } = props

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
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:0.06,
  },
  headertext:{
    color:'white',
    fontSize:20,
    left:5,
    fontWeight:"bold"
  },
  navbar:{
    // flex:0.06,
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
    marginLeft:120,
    alignItems:"center",
    borderRadius:7

  }
});
