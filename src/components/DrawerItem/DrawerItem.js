import React from 'react';
import T from 'prop-types';
import {Text, View} from 'react-native';
// please replace this one with react native one
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions} from 'react-navigation-drawer';
import {Touchable, Separator } from '../';
import s from './styles';
import { colors } from '../../styles';

const DrawerItem =  ({
  item,
  activeItemKey,
  navigation,
}) => {
  if (item.separator) {
    return <Separator />;
  }

  const  isActive = item.key === activeItemKey;

  const onPress = () =>  {
    if (typeof item.onPress === 'function') {
      item.onPress();
    } else {
      navigation.navigate(item.key);
    }
    navigation.dispatch(DrawerActions.closeDrawer());

  };
  return (
    <Touchable onPress={onPress}>
      <View style={[s.container, isActive && s.activeContainer]}>
        <View style={s.icon}>
          <Icon
            color={isActive? colors.drawerItem.ativeIcon: colors.drawerItem.icon}
            size={28}
            name={item.iconName}
            />
        </View>
        <Text style={[s.title, isActive && s.activeTitle]}>
          {item.label}
        </Text>
      </View>
    </Touchable>
  );
};

export default DrawerItem;
