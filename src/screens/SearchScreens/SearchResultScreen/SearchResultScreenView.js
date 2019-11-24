import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {DrawerButton} from '../../../components';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import s from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';
import { selected_baodan_after_filter } from '../../../modules/actions/search';

 class SearchResultScreenView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("in search result: "+ JSON.stringify(this.props.search));
    return (
      <View>
        <Icon name="rocket" size={30} color="#900" />
        <Text style = {s.text}>
          {"保单查询结果列表"}
        </Text>
        <ScrollView style={s.listItemCont, s.list}>
           {
              this.props.search.search_result.map((item, index) => (
                <SearchResItem
                  baodan={item}
                  selected_baodan_after_filter={this.props.selected_baodan_after_filter}
                  resetSearch={this.props.resetSearch}
                  navigateToClaimFile={this.props.navigateToClaimFile}
                />
              ))
           }
        </ScrollView>
      </View>
    )
  }
}

class SearchResItem extends Component{
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
    console.log(JSON.stringify(this.props));
    return (
      <View style={s.listItem, { flex: 1, flexDirection: "row"}}>
        <TouchableOpacity
          onPress={this.toggleModal}
          style={{flex: 5, backgroundColor: "#d9f9b1", justifyContent: 'center'}}
        >
          <Text style = {s.text}>{"保单id：" + this.props.baodan.baodan_id}</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text style={s.text}>{"保单id：" + this.props.baodan.baodan_id}</Text>
            <Text style={s.text}>{"保单编号：" + this.props.baodan.baodanNumber}</Text>
            <Text style={s.text}>{"保险类型：" + this.props.baodan.insurePropertyType}</Text>
            <Text style={s.text}>{"保单完成日期：" + this.props.baodan.insureDate}</Text>
            <Text style={s.text}>{"被保险人：" + this.props.baodan.insuredPerson}</Text>
            <Button title="取消" onPress={this.toggleModal} />
            <Button title="选取" onPress={()=>
                { this.props.selected_baodan_after_filter(this.props.baodan);
                  this.setState({ isModalVisible: false});
                  this.props.resetSearch();
                  this.props.navigateToClaimFile();}} />
          </View>
        </Modal>
      </View>
    )
  }
}

SearchResultScreenView.navigationOptions = ({navigation}) =>({
  title: '查询结果',
  headerLeft: (
    <DrawerButton onPress={() => navigation.toggleDrawer()}/>
  ),
});

const mapStateToProps = state  => {
  return {
    search: state.search,
  }
}

export default connect(mapStateToProps, {selected_baodan_after_filter})(SearchResultScreenView);
