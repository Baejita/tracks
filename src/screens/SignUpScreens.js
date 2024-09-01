import React, { useState } from 'react'
import {  StyleSheet, View } from 'react-native'
import { Input, Text } from '@rneui/themed';
import { Button } from '@rneui/themed';
import Spacer from '../components/spacer';

function SignUpScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
        <Spacer >
        <Text h3>Sign Up For Tracker</Text>
        </Spacer>
        <Spacer/>

        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false}/>
        <Input secureTextEntry label="Password" autoCapitalize='none' autoCorrect={false} value={password} onChangeText={setPassword}/>

        <Spacer>
        <Button title="Sign Up" />
        </Spacer>

    </View>
  )
}


SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        // borderColor: "red",
        // borderWidth: 10,
        flex: 1,
        justifyContent: "center",
        marginBottom: 200,
        marginHorizontal: 45
    }
})

export default SignUpScreen