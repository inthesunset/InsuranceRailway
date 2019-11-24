import React, { Component } from 'react';
import { createStackNavigator  } from 'react-navigation-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import {Touchable, DrawerButton } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
//import RestorePasswordScreen from '../screens/RestorePasswordScreen';

export default createStackNavigator({
  SignUp: {screen: SignUpScreen,
           navigationOptions: ({ navigation }) => ({
             title: 'Sign Up',
             headerLeft: <DrawerButton onPress = {()=> navigation.toggleDrawer()}/>,
           }),
         },
  SignIn: {screen: SignInScreen},
  //[screens.RestorePassword]: {screen: RestorePasswordScreen},
}, {initialRouteName: 'SignUp'});
