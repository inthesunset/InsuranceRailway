import React, { Component } from 'react';
import {DrawerButton} from '../../components';
import s from './styles';
import { connect } from 'react-redux';
import {
  Alert,
  LayoutAnimation,
  TouchableOpacity,
  Dimensions,
  Image,
  UIManager,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
//import CalendarPicker from 'react-native-calendar-picker';
import DatePicker from 'react-native-datepicker';

class ClaimScreenView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={s.container, s.list}>
        <Text style={s.text}>{"选择相应保单"}</Text>
        <View style={{alignItems: "center"}}>
          <Button
            title="查询已有保单"
            containerStyle={{ flex: -1 }}
            buttonStyle={s.signUpButton}
            titleStyle={s.signUpButtonText}
            onPress={this.props.navigateToSearch}
          />
        </View>
        <Text style={s.text}>{this.props.selected_baodan.baodan_id}</Text>
      </View>
    )
  }
}

//

ClaimScreenView.navigationOptions = ({navigation}) =>({
  title: '申请理赔',
  headerLeft: (
    <DrawerButton onPress={() => navigation.toggleDrawer()}/>
  ),
});

mapStateToProps = state => {
  return {
    selected_baodan: state.search.selected_baodan
  }
}

export default connect(mapStateToProps)(ClaimScreenView);
