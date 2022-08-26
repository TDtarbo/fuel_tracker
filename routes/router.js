import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Login from '../screens/login';
import Register from '../screens/register';
import Fuel from '../screens/fuel';
import Notification from '../screens/notification';
import Map from '../screens/map';
import Ionicons from "@expo/vector-icons/Ionicons"


export function DashBoard() {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'fuel') {
          iconName = focused ? 'home': 'home-outline';
        } else if (route.name === 'map') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'notification') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        }
        

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false
    })}>
      <Tab.Screen options={{headerShown: false}} name="fuel" component={Fuel} />
      <Tab.Screen options={{headerShown: false}} name="map" component={Map} />
      <Tab.Screen options={{headerShown: false}} name="notification" component={Notification} />
    </Tab.Navigator>
  )
};

export default function Log() {
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="register" component={Register} />
        <Stack.Screen options={{headerShown: false}} name="dashboard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
    )
};



