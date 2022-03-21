import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import {Image, SafeAreaView, View} from 'react-native'
import { Ionicons, } from "@expo/vector-icons";

import { Home }  from "./Home"
import { Guides } from "./Navigation/Guides/Home";
import { Components } from "./Navigation/Components/Home";
import { Api } from "./Navigation/Api/Home";
import { Architecture } from "./Navigation/Architecture/Home";
import { Blog } from "./Navigation/Blog/Home";
import { Versions } from "./Navigation/Versions/Home";
import { Github } from "./Navigation/Github/Home";

const Drawer = createDrawerNavigator();



 function Navigation () {

    return(
           <Drawer.Navigator 
                initialRouteName="home"
                 screenOptions={{
                    headerShown: false
                }} >
                <Drawer.Screen  name="Home"  component={Home} />

                <Drawer.Screen name="Guides" component={Guides} />

                <Drawer.Screen name="Components" component={Components} />

                <Drawer.Screen name="Api" component={Api} />

                <Drawer.Screen name="Architecture" component={Architecture} />

                <Drawer.Screen name="Blog" component={Blog} />

                <Drawer.Screen name="Versions" component={Versions} />

                <Drawer.Screen name="Github" component={Github} />
            </Drawer.Navigator>
    )
}

export default Navigation;