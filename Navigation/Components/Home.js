
import React, {useContext, useEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ScrollView, TouchableOpacity } from 'react-native';
import { Navbar } from '../../Navbar';
import { Datas } from "../../Context/Context";
import HomeData from './HomeData.json'
import { useDispatch } from "react-redux";
import { updateuser } from "../../Redux/Actions";

export const Components = (props) => {
    const { navigation } = props
    const {number, setnumber, userid} = useContext(Datas)
    const completed = 1
    const name = "Overall_Basics"
    // console.log(navigation.navigate)
    const dispatch = useDispatch()

    useEffect(()=>{
      console.log("Dispatching Action : {1}")
       dispatch(updateuser(userid, completed, name))
    },[])

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Navbar navigation={navigation}/>
            <View style={{flex:1}}>
                <ScrollView >
                  <Text style={styles.heading }>{`Core 
Components 
and APIs`}</Text>
                  <Text style={{fontSize:18, margin:9, marginLeft:20 }}>
                    React Native provides a number of built-in Core Components ready for you to use in your app. 
                    You can find them all in the left sidebar (or menu above, if you are on a narrow screen). 
                    If you're not sure where to get started, take a look at the following categories:
                  </Text>
                 
                  <Text style={[styles.heading,{marginLeft:0}] }> Basic Components :</Text>
                 
                    <View style={{backgroundColor:'#f2f2f2', margin:25, marginBottom:20}}>
                    <Text style={{fontSize:18, margin:9, marginLeft:20 }}>Most apps will end up using one of these basic components.</Text>
                    { HomeData.map((obj, index)=> (
                      <TouchableOpacity key={index} onPress={()=> { setnumber(obj.id); navigation.navigate("Comp1");}}>
                        <View style={styles.cardstyle}>
                          <View style={styles.innercard1}><Text style={styles.innertext1}>{obj.title}</Text></View>
                          <View style={styles.innercard2}><Text style={styles.innertext2}>{obj.desc}</Text></View>
                        </View>
                      </TouchableOpacity>
                  )) }
                 
                   </View>

                  <Text style={[styles.heading,{marginLeft:0}] }> User Interface :</Text>

                  <View style={{backgroundColor:'#f2f2f2', margin:25, marginBottom:20}}>
                    <Text style={{fontSize:18, margin:9, marginLeft:20 }}>These common user interface controls will render on any platform.</Text>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>Button</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>A basic button component that should render nicely on any platform.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>Switch</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Renders a Boolean input.</Text></View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <Text style={[styles.heading,{marginLeft:0}] }> List Views :</Text>

                  <View style={{backgroundColor:'#f2f2f2', margin:25, marginBottom:20}}>
                    <Text style={{fontSize:18, margin:9, marginLeft:20 }}>Unlike the more generic ScrollView, the following list view components only render elements that are currently showing on the screen. 
                    This makes them a performant choice for displaying long lists of data.</Text>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>FlatList</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>A component for rendering performant scrollable lists.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>SectionList</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Like FlatList, but for sectioned lists .</Text></View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <Text style={[styles.heading,{marginLeft:15}] }>Android Components and APIs :</Text>

                  <View style={{backgroundColor:'#f2f2f2', margin:25, marginBottom:20}}>
                    <Text style={{fontSize:18, margin:9, marginLeft:20 }}>Many of the following components provide wrappers for commonly used Android classes.</Text>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>BackHandler</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Detects hardware button presses for back navigation.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>DrawerLayoutAndroid</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Renders a DrawerLayout on Android.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>PermissionsAndroid</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Provides access to the permissions model introduced in Android M.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>ToastAndroid</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Creates an Android Toast alert .</Text></View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <Text style={[styles.heading,{marginLeft:15}] }>iOS Components and APIs :</Text>

                  <View style={{backgroundColor:'#f2f2f2', margin:25, marginBottom:20}}>
                    <Text style={{fontSize:18, margin:9, marginLeft:20 }}>Many of the following components provide wrappers for commonly used UIKit classes.</Text>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>ActionSheetIOS</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>API to display an iOS action or share sheet.</Text></View>
                      </View>
                    </TouchableOpacity>
                  </View>

                   <Text style={[styles.heading,{marginLeft:15}] }>Others :</Text>

                  <View style={{backgroundColor:'#f2f2f2', margin:25, marginBottom:100}}>
                    <Text style={{fontSize:18, margin:9, marginLeft:20 }}>These components may be useful for certain applications. For an exhaustive list of components and APIs,
                     check out the sidebar to the left (or menu above, if you are on a narrow screen).</Text>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>ActivityIndicator</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Displays a circular loading indicator.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>Alert</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Launches an alert dialog with specified title and message.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>Animated</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>A library for creating fluid, powerful animations that are easy to build and maintain.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>Dimensions</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Provides an interfaace for getting device dimensions.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>KeyboardAvoidingView</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Provides a view that moves out of the way of the virtual keyboard automatically.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>Linking</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Provides a general interface to interact with both incoming and outgoing app links.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>Modal</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Provides a simple way to present content above an enclosing view.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>PixelRatio</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Provides access to the device pixel density.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>RefreshControl</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>This component is used inside a Scrollview to add pull to referesh functionallity.</Text></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.cardstyle}>
                        <View style={styles.innercard1}><Text style={styles.innertext1}>StatusBar</Text></View>
                        <View style={styles.innercard2}><Text style={styles.innertext2}>Component to control the app status bar.</Text></View>
                      </View>
                    </TouchableOpacity>
                  </View>



                </ScrollView>
            </View>
        
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    top:35
  },
  heading:{
    color:"black",
    fontSize:35, 
    fontWeight:"bold", 
    marginLeft:15, 
    marginBottom:10, 
    marginTop:20, 
    lineHeight:50
  },
  cardstyle:{
    padding:20,  
    backgroundColor:'#f2f2f2',  
  },
  innercard1:{
    backgroundColor:"#61dafb",
    borderTopLeftRadius:10, 
    borderTopRightRadius:10 
  },
  innertext1:{
    color:"white", 
    fontSize:20, 
    margin:10
  },
  innertext2:{ 
    fontSize:12, 
    margin:10
  },
  innercard2:{
    backgroundColor:"white", 
    borderBottomLeftRadius:10, 
    borderBottomRightRadius:10
  }
});
