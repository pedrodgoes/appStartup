import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import MainTab from '../stacks/MainTab'

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Preload" component={Preload} screenOptions={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} screenOptions={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} screenOptions={{headerShown: false}}/>
            <Stack.Screen name="MainTab" component={MainTab} screenOptions={{headerShown: false}}/>
        </Stack.Navigator>
    )

}
