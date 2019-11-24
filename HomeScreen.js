 import React, {Component} from 'react';
 import {Button, Avatar, SocialIcon, Badge, Icon, withBadge, ListItem, CheckBox} from 'react-native-elements';
 import {View, Text} from 'react-native';

class HomeScreen extends React.Component {
  state = {checked: true}
 static navigationOptions = {
   title: 'Welcome',
   headerTruncatedBackTitle: "to Home",
   headerTitle: 'A much too long text for back button from Profile to Home',
 };
 render() {
   return (
    <View>
<SocialIcon
  type='twitter'
/>
     <CheckBox
  title='Click Here'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here to Remove This Item'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
/>

</View>
   );
 }
}

export default HomeScreen;
