import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {DrawerButton} from '../../components';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import s from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';
import {delete_baodan} from '../../modules/actions/baodan';
import BaodanList from './BaodanList';
//import { getValue } from '../InsureScreens/InsureFormScreen/InsureFormScreenView';

//this.state = {baodan: JSON.stringify(getValue("baodan"))};

 class VisitorWelcomeScreenView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log("print out passed in params:  ");
    // console.log(this.props);
    return (
      <View>
        <Icon name="rocket" size={30} color="#900" />
        <Text style = {{color: "red"}}>
          {"保单列表"}
        </Text>
        <BaodanList />
      </View>
    )
  }
}






// const VisitorWelcomeScreenView = () => (
//   <View>
//     <Icon name="rocket" size={30} color="#900" />
//     <Text style = {{color: "red"}}>
//       {this.state.baodan}
//     </Text>
//   </View>
// );
// const VisitorWelcomeScreenView = () => (
//   <View>
//     <Icon name="rocket" size={30} color="#900" />
//   </View>
// );


VisitorWelcomeScreenView.navigationOptions = ({navigation}) =>({
  title: 'Home',
  headerLeft: (
    <DrawerButton onPress={() => navigation.toggleDrawer()}/>
  ),
});

const mapStateToProps = state  => {
  return {
    username: state.loginAndout.username,
  }
}

export default connect(mapStateToProps)(VisitorWelcomeScreenView);
