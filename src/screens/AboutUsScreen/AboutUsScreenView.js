import React from 'react';
import { WebView } from 'react-native-webview';
import {DrawerButton} from '../../components';
import s from './styles';

const AboutUsScreenView = () => (
  <WebView
    style={s.container}
    source={{ uri: 'https://www.12306.cn'}}
  />
);

AboutUsScreenView.navigationOptions = ({navigation}) =>({
  title: 'About Us',
  headerLeft: (
    <DrawerButton onPress={() => navigation.toggleDrawer()}/>
  ),
});

export default AboutUsScreenView;
