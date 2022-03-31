import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerContent from "./DrawerContent";
import { Ionicons } from "@expo/vector-icons";

import { Login } from "./Login/Login";
import { Home }  from "./Home"
import { Guides } from "./Navigation/Guides/Home";
import { Components } from "./Navigation/Components/Home";
import { Api } from "./Navigation/Api/Home";
import { Architecture } from "./Navigation/Architecture/Home";
import { Blog } from "./Navigation/Blog/Home";
import { Github } from "./Navigation/Github/Home";
import Profile from "./Navigation/User/Profile";
import Progress from "./Navigation/User/Progress";
import PointsSystem from "./Navigation/User/PointsSystem";

import { DataProvider } from './Context/Context';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer1 from './Redux/Reducer1';

const store = createStore( Reducer1, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); 


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



import { Comp1 } from "./Navigation/Components/Comp1/Home";
import Register from "./Login/Register";


function TabNavigator () {

    return (
        <Tab.Navigator 
        // style={{ bottom: 30}} 
         screenOptions={({ route }) => ({
                
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
            //   <ion-icon name="information-circle-outline"></ion-icon>
              if (route.name === 'Profile') {
                iconName = focused ? 'people-outline' : 'people-outline';
              } else if (route.name === 'Progress') {
                iconName = focused ? 'podium-outline' : 'podium-outline';
              } else if (route.name === 'PointsSystem') {
                  iconName = focused ? 'information-circle-outline' : 'information-circle-outline' ;
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            
            tabBarActiveTintColor: '#61dafb',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Progress" component={Progress} />
            <Tab.Screen name="PointsSystem" component={PointsSystem} />
        </Tab.Navigator>
    )
}



function StackNavigation() {
    return (
     
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Components1" component={Components} />
            <Stack.Screen name="Comp1" component={Comp1} />
        </Stack.Navigator>
    );
  }



 function Navigation () {

    return(
        
        <DataProvider>
            <Provider store={store}>
                <Drawer.Navigator 
                    initialRouteName="Login"
                    screenOptions={{
                        headerShown: false
                    }}
                    drawerContent={(props) => <DrawerContent {...props} />}
                    >
                        
                    <Drawer.Screen  name="Login"  component={Login} />

                    <Drawer.Screen  name="Register"  component={Register} />

                    <Drawer.Screen  name="Home"  component={Home} />

                    <Drawer.Screen name="Guides" component={Guides} />

                    <Drawer.Screen name="Components" component={StackNavigation} />

                    <Drawer.Screen name="Api" component={Api} />

                    <Drawer.Screen name="Architecture" component={Architecture} />

                    <Drawer.Screen name="Blog" component={Blog} />

                    <Drawer.Screen name="User" component={TabNavigator} />

                    <Drawer.Screen name="Github" component={Github} />
                </Drawer.Navigator>
            </Provider>
        </DataProvider>
    )
}

export default Navigation;