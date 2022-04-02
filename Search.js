import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React,{useState, useContext} from 'react'
import { Ionicons, } from "@expo/vector-icons";
import Data from './Navigation/Components/HomeData.json'
import { Datas } from './Context/Context';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const {number, setnumber, userid} = useContext(Datas)
    const [search, setSearch] =useState()
    const [FilteredData, setFilteredData] =useState([])
    const navigation =useNavigation()

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the Datas and update FilteredData
          const newData = Data.filter(
            function (item) {
              // Applying filter for the inserted text in search bar
              const itemData = item.title
                  ? item.title.toUpperCase()
                  : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            }
          );
          setFilteredData(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredData with Datas
          setFilteredData(Data);
          setSearch(text);
        }
      };
      const ItemView = ({item}) => {
        return (
          <TouchableOpacity  onPress={()=> { setnumber(item.id); navigation.navigate("Comp1");}}>
                <View style={styles.cardstyle}>
                    <View style={styles.innercard1}><Text style={styles.innertext1}>{item.title}</Text></View>
                    <View style={styles.innercard2}><Text style={styles.innertext2}>{item.desc}</Text></View>
                </View>
            </TouchableOpacity>
         
        );
      };
    
    

  return (
    <View style={styles.container1}>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Search"
                    value={search}
                    placeholderTextColor="#20232a"
                    onChangeText={(text) => searchFilterFunction(text)}
                    />
                     <Ionicons 
                        name="search-outline"
                        size={30}
                        color="black"
                        
                        // onPress={() => navigation.navigate("User")}
                    />
              </View>
              <View style={{flex:1}}>
                <FlatList
                    data={FilteredData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ItemView}
                />
              </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container1:{
        flex:1,
        // top:35,
        backgroundColor:"#222222",
        // marginBottom:10,
    },
    inputView: {
        top:35,
        backgroundColor: "#fff",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 50,
        flexDirection:"row",
        alignItems: "center",
        alignSelf:"center",
        padding:7
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
      },
      cardstyle:{
        // top:5,
        padding:20,  
        
        // backgroundColor:'#f2f2f2',  
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
})