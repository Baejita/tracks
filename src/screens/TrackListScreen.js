import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

function TrackListScreen({navigation}) {
  return (
    <View>
        <Text style={{fontSize : 48}}>TrackListScreen</Text>
        <Button title='Go To TrackDetail' onPress={()=> navigation.navigate('TrackDetail')}/>

    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackListScreen