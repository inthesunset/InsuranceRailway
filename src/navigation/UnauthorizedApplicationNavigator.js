import { createDrawerNavigator } from 'react-navigation-drawer';
import {screens} from './screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import AuthNavigator from './AuthNavigator';
import UnauthorizedDrawer from './components/Drawer/UnauthorizedDrawer';

//for test:
import React from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import {ScrollView, SafeAreaView } from 'react-native';

export default createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    drawLabel: 'Home',
  },
  AboutUs: {
    screen: AboutUsNavigator,
    drawerLabel: 'About Us',
  },
  Auth: {
    screen: AuthNavigator,
    drawerLabel: 'Sign Up',
  },
}, {
  initialRouteName: 'Home',
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: UnauthorizedDrawer,
});
