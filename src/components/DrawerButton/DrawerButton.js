import React from 'react';
import T from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Touchable } from '../';
import s from './styles';
import { colors } from '../../styles';

const DrawerButton = ({
  onPress,
}) => (
  <Touchable
    style={s.icon}
    onPress={onPress}
    useOpacity
    borderless
  >
    <Icon
      color={colors.drawerButton.color}
      size={28}
      name="bars"
    />
  </Touchable>
);

DrawerButton.propTypes = {
  onPress: T.func,
};

export default DrawerButton;
