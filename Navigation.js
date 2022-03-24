import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home }  from "./Home"
import { Guides } from "./Navigation/Guides/Home";
import { Components } from "./Navigation/Components/Home";
import { Api } from "./Navigation/Api/Home";
import { Architecture } from "./Navigation/Architecture/Home";
import { Blog } from "./Navigation/Blog/Home";
import { Versions } from "./Navigation/Versions/Home";
import { Github } from "./Navigation/Github/Home";

import { DataProvider } from './Context/Context';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



import { Comp1 } from "./Navigation/Components/Comp1/Home";



export  function StackNavigation() {
    return (
     
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Components" component={Components} />
          <Stack.Screen name="Comp1" component={Comp1} />
        </Stack.Navigator>
    );
  }



 function Navigation () {

    return(
        <DataProvider>
           <Drawer.Navigator 
                initialRouteName="Components"
                 screenOptions={{
                    headerShown: false
                }} >

                <Drawer.Screen  name="Home"  component={Home} />

                <Drawer.Screen name="Guides" component={Guides} />

                <Drawer.Screen name="Components" component={StackNavigation} />

                <Drawer.Screen name="Api" component={Api} />

                <Drawer.Screen name="Architecture" component={Architecture} />

                <Drawer.Screen name="Blog" component={Blog} />

                <Drawer.Screen name="Versions" component={Versions} />

                <Drawer.Screen name="Github" component={Github} />
            </Drawer.Navigator>
        </DataProvider>
    )
}

export default Navigation;