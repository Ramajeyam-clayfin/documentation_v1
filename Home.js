import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Navbar } from './Navbar';

export const Home = (props) => {
    const { navigation } = props

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Navbar navigation={navigation}/>
            <View style={{flex:1}}>
                <ScrollView >
                    <Image style={{height:250}} resizeMode="cover" source={require('./Images/home2.png')}/>
                    <Text style={{color:"white"}}>This is Home page</Text>
                </ScrollView>
            </View>
        
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    top:35
  },
});
