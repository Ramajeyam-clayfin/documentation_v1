
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation  from './Navigation';
import { DataProvider } from './Context/Context';

export default function App() {
  return (
    <View style={styles.container}>
      
      <NavigationContainer>
        <DataProvider>
          <Navigation/>
        </DataProvider>
      </NavigationContainer>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
