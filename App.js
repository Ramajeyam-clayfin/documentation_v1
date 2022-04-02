
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation  from './Navigation';
import StackNavigation from './Navigation';


export default function App() {
  return (
    <View style={styles.container}>
      
      <NavigationContainer>
          <StackNavigation/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
