
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ScrollView } from 'react-native';
import { Navbar } from '../../Navbar';

export const Api = (props) => {
    const { navigation } = props

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Navbar navigation={navigation}/>
            <View style={{flex:1}}>
                <ScrollView >
                  <Text style={{color:"white"}}>This is Api Page</Text>
                </ScrollView>
            </View>
        
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    top:35
  },
});
