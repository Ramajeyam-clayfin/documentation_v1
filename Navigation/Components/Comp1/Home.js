import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ScrollView, Dimensions } from 'react-native';
import { Navbar } from '../../../Navbar';

export const Comp1 = (props) => {
    const { navigation } = props

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Navbar navigation={navigation}/>
            <View style={{flex:1}}>
                  <View style={styles.container2}>
                    <Text style={{color:"white"}}>This is Comp1 Page</Text>
                  </View>
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
    height: (Math.round(Dimensions.get("screen").height)-50),
    backgroundColor: '#333333', 
    margin:20, 
    borderRadius:20, 
    padding:20,
    
  }
});
