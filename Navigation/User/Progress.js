import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Progress = () => {
  return (
    <View style={styles.container1}>
      <Text>Progress</Text>
    </View>
  )
}

export default Progress

const styles = StyleSheet.create({
    container1:{
        flex:1,
        top:38,
        justifyContent:"center",
        alignItems:"center"
    }
})