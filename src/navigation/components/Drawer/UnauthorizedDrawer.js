import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import {DrawerItem, Logo} from '../../../components';
import screens from '../../screens';
import {LinkingService } from '../../../services';
import {globalStyles} from '../../../styles';

const CustomDrawerContentComponent = (props) =>  {
  const items = [
    {label: 'Home', key: screens.Home, iconName: 'home' },
    {label: 'About Us', key: screens.AboutUs, iconName: 'info-circle'},
    {
      label: 'Terms & Conditions',
      key: 'Terms',
      onPress: ()=>LinkingService.openTerms(),
      iconName: 'file',
    },
    {separator: true,  key: 'separator'},
    {label: 'Sign Up', key: screens.Auth, iconName: 'sign-in'},
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
