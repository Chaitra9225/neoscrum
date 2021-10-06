import React, { Component } from 'react';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
class Navigation extends Component{
    render(){
        return(
            <NavigationContainer  >
    
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={Login}/>
               <Stack.Screen name="SignUp" component={SignUp}/>
           </Stack.Navigator>
             </NavigationContainer>
        )
    }
}
export default Navigation