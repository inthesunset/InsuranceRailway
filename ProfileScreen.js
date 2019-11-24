 import React, {Component} from 'react';
 import {Button} from 'react-native';
class ProfileScreen extends React.Component {
 static navigationOptions = {
 };
 render() {
   const {navigate} = this.props.navigation;
   return (
     <Button
       title="Go to Jane's profile "
       onPress={() => navigate('Home', {name: 'Back'})}
     />
   );
 }
}

export default ProfileScreen;
