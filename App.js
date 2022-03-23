
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation  from './Navigation';
import StackNavigation from "./Navigation/Components/Navigation";

export default function App() {
  return (
    <View style={styles.container}>
      
      <NavigationContainer>
          <Navigation/>
      </NavigationContainer>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
