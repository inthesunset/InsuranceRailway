import React, { Component } from 'react';
import {delete_baodan} from '../../modules/actions/baodan';
import s from './styles';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';

class BaodanItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render(){
    return (
      <View style={s.listItem, { flex: 1, flexDirection: "row"}}>
        <TouchableOpacity
          onPress={this.toggleModal}
          style={{flex: 5, backgroundColor: "#d9f9b1", justifyContent: 'center'}}
        >
          <Text style = {s.text}>{"保单id：" + this.props.id}</Text>
        </TouchableOpacity>
        <Icon.Button name="trash" color="red" backgroundColor="white" size={20} style={{flex: 1}}
          onPress={() => {
            Alert.alert('WARNING', '您将要删除编号为'+ this.props.baodanNumber +'的保单',
            [
              {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: '确定', onPress: () => this.props.delete_baodan(this.props.id)}
            ]);
          } }/>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <Text style={s.text}>{"保单id：" + this.props.id}</Text>
              <Text style={s.text}>{"保单编号：" + this.props.baodanNumber}</Text>
              <Text style={s.text}>{"保险类型：" + this.props.insurePropertyType}</Text>
              <Text style={s.text}>{"保单完成日期：" + this.props.insureDate}</Text>
              <Text style={s.text}>{"被保险人：" + this.props.insuredPerson}</Text>
              <Button title="查看完毕" onPress={this.toggleModal} />
            </View>
          </Modal>
      </View>
    )
  }
}


export default connect(null, {delete_baodan})(BaodanItem)
