import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PointsSystem = () => {
  return (
    <View style={styles.container1}>
      <Text>PointsSystem</Text>
    </View>
  )
}

export default PointsSystem

const styles = StyleSheet.create({ 
    container1:{
        flex:1,
        top:38,
        justifyContent:"center",
        alignItems:"center"
    }
})