import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home'
import Details from '../screens/Details'

export default function Routes() {

    const stack =  createStackNavigator();

    return(


            <stack.Navigator>

                <stack.Screen name = "Home" component = {Home} options = {{headerShown:false}}/>
                <stack.Screen name = "Details" component = {Details}/>

            </stack.Navigator>

       

    )

}