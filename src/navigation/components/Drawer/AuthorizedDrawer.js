import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import {DrawerItem, Logo} from '../../../components';
import screens from '../../screens';
import {LinkingService } from '../../../services';
import {globalStyles} from '../../../styles';
//Search Insure Claim Compensation Dispatch AboutUs SignOut
const CustomDrawerContentComponent = (props) =>  {
  const items = [
    {label: 'Home', key: screens.Home, iconName: 'home' },
    {label: '查询', key: screens.Search, iconName: 'search'},
    {label: '投保', key: screens.Insure, iconName: 'cart-plus'},
    {label: '申请理赔', key: screens.Claim, iconName: 'edit'},
    {label: '赔付', key: screens.Compensation, iconName: 'hand-holding-usd'},
    {label: '调度', key: screens.Dispatch, iconName: 'user-cog'},
    {label: '关于我们', key: screens.AboutUs, iconName: 'info-circle'},
    {
      label: 'Terms & Conditions',
      key: 'Terms',
      onPress: ()=>LinkingService.openTerms(),
      iconName: 'file',
    },
    {separator: true,  key: 'separator'},
    {label: 'Sign Out', key: screens.SignOut, iconName: 'sign-out'},
  ];

  return (
    <ScrollView>
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        {items.map((item, index) => (
          <DrawerItem
            key={`${item.key}-${index}`}
            {...props}
            item={item}
          />))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default CustomDrawerContentComponent;
