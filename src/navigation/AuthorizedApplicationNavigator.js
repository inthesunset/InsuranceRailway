import { createDrawerNavigator } from 'react-navigation-drawer';
import {screens} from './screens';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import AuthNavigator from './AuthNavigator';
import SearchNavigator from './SearchNavigator';
import AuthorizedDrawer from './components/Drawer/AuthorizedDrawer';
import UnauthorizedApplicationNavigator from './UnauthorizedApplicationNavigator';
import InsureNavigator from './InsureNavigator';
import ClaimNavigator from './ClaimNavigator';
//for test:
import React from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import {ScrollView, SafeAreaView } from 'react-native';

export default createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    drawerLabel: 'Home',
  },
  Search: {
    screen: SearchNavigator,
    drawerLabel: '查询',
  },
  Insure: {
    screen: InsureNavigator,
    drawerLabel: '投保',
  },
  Claim: {
    screen: ClaimNavigator,
    drawerLabel: '申请理赔',
  },
  // Compensation: {
  //   screen: CompensationNavigator,
  //   drawerLabel: '赔付',
  // },
  // Dispatch: {
  //   screen: DispatchNavigator,
  //   drawerLabel: '调度',
  // },
  AboutUs: {
    screen: AboutUsNavigator,
    drawerLabel: 'About Us',
  },
  SignOut: {
    screen: UnauthorizedApplicationNavigator,
    drawerLabel: 'Sign Out',
  },
},
{
  initialRouteName: 'Home',
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: AuthorizedDrawer,
});
