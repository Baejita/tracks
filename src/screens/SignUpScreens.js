import React, { useContext, useState } from 'react'
import {  StyleSheet, View } from 'react-native'
import { Input, Text } from '@rneui/themed';
import { Button } from '@rneui/themed';
import Spacer from '../components/spacer';
import { Context as AuthContext } from '../context/authContext';

function SignUpScreen({navigation}) {
    const {state, signup} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(state)

  return (
    <View style={styles.container}>
        <Spacer >
        <Text h3>Sign Up For Tracker</Text>
        </Spacer>
        <Spacer/>

        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false}/>
        <Input secureTextEntry label="Password" autoCapitalize='none' autoCorrect={false} value={password} onChangeText={setPassword}/>

            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        <Spacer>
        <Button title="Sign Up" onPress={()=> signup({email, password})} />
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
    },
    errorMessage:{
        color: "red",
        fontSize: 16

    }
})

export default SignUpScreen