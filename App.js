import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SignUpScreen from './src/screens/SignUpScreens';
import SignInScreen from './src/screens/SignInScreens';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import { Provider  as AuthProvider} from './src/context/authContext';

const SwitchNavigator = createSwitchNavigator({
  loginFlow : createStackNavigator({
    Signup : SignUpScreen,
    Signin : SignInScreen
  }),
  mainFlow : createMaterialBottomTabNavigator({
    TrackList : createStackNavigator({
      TrackList : TrackListScreen,
      TrackDetail : TrackDetailScreen
    }),
      TrackCreate : TrackCreateScreen,
      Account : AccountScreen,
    
  })
})

const App = createAppContainer(SwitchNavigator)

export default ()=> {
  return (
    <AuthProvider>
  <App />
</AuthProvider>
  )

}
