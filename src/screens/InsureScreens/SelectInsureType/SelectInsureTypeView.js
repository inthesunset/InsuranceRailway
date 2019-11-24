import React, { Component } from 'react';
import {DrawerButton} from '../../../components';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';
import { Input, Button, Icon } from 'react-native-elements';

export default class SelectType extends Component {
  constructor(props) {
    super(props);
	   this.state = {
       insureOptions: ["乘意险", "车损险", "物险"],
       insureType: '',
     };
  }

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <View style={{ width: '80%', alignItems: 'center' }}>
          <ModalDropdown
            style = {styles.button}
            textStyle = {styles.buttonText}
            dropdownStyle = {styles.dropdown}
            dropdownTextStyle = {styles.rowText}
            dropdownTextHighlightStyle = {styles.highlightedRowText}
            defaultValue = {"请选择保险类型 ..."}
            options = {this.state.insureOptions}
            onSelect = {(index, value) => this.setState({insureType: String(value)})}
          />
          <Button
            title={"填写" + this.state.insureType + "保单"}
            containerStyle={{ flex: -1 }}
            buttonStyle={styles.signUpButton}
            titleStyle={styles.signUpButtonText}
            onPress={this.props.fillForm}
            disabled={!Boolean(this.state.insureType)}
          />
        </View>
      </ScrollView>
    );
  }
}

SelectType.navigationOptions = ({navigation}) =>({
  title: '投保',
  headerLeft: (
    <DrawerButton onPress={() => navigation.toggleDrawer()}/>
  ),
});
