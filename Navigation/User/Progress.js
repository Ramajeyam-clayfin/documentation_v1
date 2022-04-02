import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React, {useContext} from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
import { Ionicons, } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
import { Navbar } from '../../Navbar';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Datas } from '../../Context/Context';
import { getData } from '../../firebase';

const Progress = () => {
    const navigation = useNavigation()
    const { allusers, userid, setAllusers } = useContext(Datas)
    const [refreshing, setRefreshing] = React.useState(false);
    // console.log("checking3 :", allusers)
    
    const user = useSelector(state => state.userData)

    const name1 = user.map(obj => obj.name)
    const name = name1.toString()
    const checking = user.map(obj => obj.Datas.Intro)
    const checking2 = user.map(obj => obj.Datas.Basics.Total.Overall_Basics)

    const intro = Number(checking)
    const components = Number(checking2)

    const Sorted = allusers.sort((a, b) => (b?.Total - a?.Total))

    // console.log("Sorted :", Sorted)

    const LeaderBoard = ({ item, index }) => {
        return(
            <View style={[styles.card, {backgroundColor: (item.name === name) ? "#05c5fa" : "#00ff99" }]} key={index} >
                <View style={{ alignItems:"center"}}>
                    <Ionicons 
                    name="person-circle-outline"
                    size={40}
                    color="#000000"
                    />
                </View>
                
                <View style={{alignSelf:"center"}}>
                    <Text style={styles.cardText}>{item.name}</Text>
                </View>

                <View style={{alignSelf:"center"}}>
                    <Text  style={styles.cardText}>{item.Total} %</Text>
                </View>

            </View>
        )
    }

    const onRefresh = () => {
        setRefreshing(true);
        
        const getusers = (values) => {
            setAllusers(values)
            console.log("Disaptching Initialize with ID : ", userid)
            setRefreshing(false)
          } 
          console.log("GetData is calling")
          getData(getusers)
          
        
      }

  return (
    <View style={styles.container1}>
         <StatusBar style="auto" />
        <Navbar navigation={navigation}/>
        <View style={{flex:1}}>
        <View style={styles.container2}>
            <View style={{alignItems:"center"}}>
                <Text style={{marginBottom:10}}>Introduction</Text>
                <CircularProgress
                    value={intro}
                    activeStrokeColor={'#05c5fa'}
                    inActiveStrokeColor={'#61dafb'}
                    //   activeStrokeSecondaryColor={'#cdf3fe'}
                    inActiveStrokeOpacity={0.2}
                    progressValueColor={'#61dafb'}
                    valueSuffix={'%'}
                    title={'Total'}
                    titleColor={'#000000'}
                    delay={1000}
                    radius={60}
                    clockwise={false}
                    />
            </View>
            <View  style={{alignItems:"center"}}>
                <Text style={{marginBottom:10}}> Components</Text>
                <CircularProgress
                value={components}
                activeStrokeColor={'#05c5fa'}
                inActiveStrokeColor={'#61dafb'}
                //   activeStrokeSecondaryColor={'#cdf3fe'}
                inActiveStrokeOpacity={0.2}
                progressValueColor={'#61dafb'}
                valueSuffix={'%'}
                title={'Total'}
                titleColor={'#000000'}
                delay={1000}
                radius={60}
                clockwise={false}
                />
            </View>
        </View>
        <View style={styles.container3}>
            <Text style={styles.heading}>LeaderBoard</Text>
            <View style={{flexShrink:1, paddingBottom:15}}>
                
                    <FlatList
                        data={Sorted}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => LeaderBoard({ item, index })}
                        refreshing={refreshing}
                        onRefresh={() => onRefresh()}
                    />
            </View>
        </View>
        </View>
    </View>
  )
}

export default Progress

const styles = StyleSheet.create({
    container1:{
        flex:1,
        // alignItems:"center",
        // justifyContent:"center",
        top:35
    },
    container2:{
        flex:0.5,
        justifyContent:'space-evenly',
        alignItems:"center",
        flexDirection:"row",
    },
    container3 :{
        flex:1,
        width: "90%",
        backgroundColor:"#e6e6e6",
        alignSelf:"center",
        // justifyContent:"center",
        // alignItems:"center",
        margin: 10,
        marginBottom: 90,
        borderRadius:30,
        borderColor:"#61dafb",
        borderWidth:4
    },
    heading : {
        color:"black",
        fontSize:40,
        alignSelf:"center",
        marginBottom: 30,
        marginTop:10,
        fontWeight:"bold",
    },
    card:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingRight:50,
        // paddingBottom: 10,
        borderWidth:3,
        borderColor:"black",
        borderRadius:30,
        padding: 5,
        marginBottom: 5,
        marginTop:10,
        width:"90%",
        alignSelf:"center",
    },
    cardText :{
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:18
    }
})