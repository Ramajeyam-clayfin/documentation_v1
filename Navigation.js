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
// import { Api } from "./Navigation/Api/Home";
// import { Architecture } from "./Navigation/Architecture/Home";
// import { Blog } from "./Navigation/Blog/Home";
import { Github } from "./Navigation/Github/Home";
import Profile from "./Navigation/User/Profile";
import Progress from "./Navigation/User/Progress";
import PointsSystem from "./Navigation/User/PointsSystem";
import { Comp1 } from "./Navigation/Components/Comp1/Home";
import Register from "./Login/Register";
import Search from "./Search";

import { DataProvider } from './Context/Context';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer1 from './Redux/Reducer1';

const store = createStore( Reducer1, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); 


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();






function TabNavigator () {

    return (
        <Tab.Navigator 
         screenOptions={({ route }) => ({
            headerShown: false ,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
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

function HomeNavigation () {
    return(
        <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen  name="Home1"  component={Home} />
        </Drawer.Navigator>
    )
}
function GuidesNavigation () {
    return(
        <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen  name="Guides1"  component={Guides} />
        </Drawer.Navigator>
    )
}
function GithubNavigation () {
    return(
        <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen  name="Github1"  component={Github} />
        </Drawer.Navigator>
    )
}
function ComponentsNavigation () {
    return(
        <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen  name="Components1"  component={Components} />
        </Drawer.Navigator>
    )
}
function Comp1Navigation () {
    return(
        <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen  name="Comp2"  component={Comp1} />
        </Drawer.Navigator>
    )
}

function Navigation () {

    return(
        
                <Drawer.Navigator 
                    
                    screenOptions={{ headerShown: false }}
                    drawerContent={(props) => <DrawerContent {...props} />}
                    >
                    <Drawer.Screen name="User1" component={TabNavigator} />

                </Drawer.Navigator>
    )
}


function StackNavigation() {
    return (
        <DataProvider>
            <Provider store={store}>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Home" component={HomeNavigation} />
                    <Stack.Screen name="Guides" component={GuidesNavigation} />
                    <Stack.Screen name="Github" component={GithubNavigation} />
                    <Stack.Screen name="User" component={Navigation} />
                    <Stack.Screen name="Components" component={ComponentsNavigation} />
                    <Stack.Screen name="Comp1" component={Comp1Navigation} />
                    <Stack.Screen name="Search" component={Search} />
                    
                    
                </Stack.Navigator>
            </Provider>
        </DataProvider>
    );
  }




export default StackNavigation;