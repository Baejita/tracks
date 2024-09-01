import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

function SignUpScreen({navigation}) {
  return (
    <View>
        <Button title='Go To SignIn' onPress={()=> navigation.navigate('SignIn')}/>
        <Text style={{fontSize : 48}}>SignUpScreen</Text>
        <Button title='Go To MainFlow' onPress={()=> navigation.navigate('mainFlow')}/>

    </View>
  )
}

const styles = StyleSheet.create({})

export default SignUpScreen