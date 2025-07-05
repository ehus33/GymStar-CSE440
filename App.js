import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ProfileScreen from './screens/ProfileScreen';
import MessagesScreen from './screens/MessagesScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import RoomDetailScreen from './screens/RoomDetailScreen';
import LegendModal from './screens/LegendModal';
import SearchResultsScreen from './screens/SearchResultsScreen';
import MachineOverviewScreen from './screens/MachineOverviewScreen';
import MachineInfoScreen from './screens/MachineInfoScreen';
import MyWorkoutsScreen from './screens/MyWorkoutsScreen';
import StatusInfoScreen from './screens/StatusInfoScreen';
import PathMapScreen from './screens/PathMapScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
        <Stack.Screen name="LegendModal" component={LegendModal} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        <Stack.Screen name="MachineOverview" component={MachineOverviewScreen} />
        <Stack.Screen name="MachineInfo" component={MachineInfoScreen} />
        <Stack.Screen name="MyWorkouts" component={MyWorkoutsScreen} />
        <Stack.Screen name="StatusInfo" component={StatusInfoScreen} />
        <Stack.Screen name="PathMap" component={PathMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}