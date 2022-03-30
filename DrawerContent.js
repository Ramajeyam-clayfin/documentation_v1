import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple,  Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { Ionicons, } from "@expo/vector-icons";

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { auth } from './firebase';
import { useNavigation } from '@react-navigation/native';


 function DrawerContent(props) {
     
    const navigation = useNavigation()
    const user = useSelector(state => state.userData)

    const name1 = user.map(obj => obj.name)
    const name = name1.toString()
    const email1 = user.map(obj => obj.email)
    const email = email1.toString()

    console.log("Drawer :", name)

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.navigate("Login")
          })
          .catch(error => alert(error.message))
      }
    

    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                
                <View style={styles.drawerContent}>
                    <Drawer.Section >
                    <View style={[styles.userInfoSection, {backgroundColor:"#bfbfbf"}]}>
                        <View style={{flexDirection:'row',marginTop: 15, marginBottom:15}}>
                            <Ionicons
                                name="person-circle-outline"
                                size={50}
                                color="white"
                                // onPress={() => navigation.toggleDrawer()}
                            />
                           
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{name}</Title>
                                <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>
                    </View>
                    </Drawer.Section>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            // icon={({color, size}) => (
                            //     <MaterialCommunityIcons 
                            //     name="home-outline" 
                            //     color={color}
                            //     size={size}
                            //     />
                            // )}
                            label="Home"
                            onPress={() => {navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            // icon={({color, size}) => (
                            //     <MaterialCommunityIcons 
                            //     name="account-outline" 
                            //     color={color}
                            //     size={size}
                            //     />
                            // )}
                            label="Guides"
                            onPress={() => {navigation.navigate('Guides')}}
                        />
                        <DrawerItem 
                            // icon={({color, size}) => (
                            //     <MaterialCommunityIcons 
                            //     name="bookmark-outline" 
                            //     color={color}
                            //     size={size}
                            //     />
                            // )}
                            label="Components"
                            onPress={() => {navigation.navigate('Components')}}
                        />
                        <DrawerItem 
                            label="Api"
                            onPress={() => {navigation.navigate('Api')}}
                        />
                        <DrawerItem 
                            label="Architecture"
                            onPress={() => {navigation.navigate('Architecture')}}
                        />
                        <DrawerItem 
                            label="Blog"
                            onPress={() => {navigation.navigate('Blog')}}
                        />
                        <DrawerItem 
                            label="Github"
                            onPress={() => {navigation.navigate('Github')}}
                        />
                        
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {}}>
                            <View style={styles.preference}>
                                <Text>Biometric</Text>
                                <View pointerEvents="none">
                                    <Switch />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                            name="log-out-outline"
                            size={30}
                            color="black"
                            onPress={() => handleSignOut()}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => handleSignOut()}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  export default DrawerContent