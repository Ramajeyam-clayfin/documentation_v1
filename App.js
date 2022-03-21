
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation  from './Navigation';
import { Home } from './Home';

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
