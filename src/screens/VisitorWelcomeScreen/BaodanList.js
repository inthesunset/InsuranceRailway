import React, { Component } from 'react';
import BaodanItem from './BaodanItem';
import s from './styles';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';
// BaodanKust accept username and baodan 2 props.
class BaodanList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.baodan.baodan);
    return (
       <ScrollView style={s.listItemCont, s.list}>
          {
             this.props.baodan.baodan.map((item, index) => (
               <BaodanItem
                 id={item.baodan_id}
                 baodanNumber={item.baodanNumber}
                 insurePropertyType={item.insurePropertyType}
                 insureDate={item.insureDate}
                 insuredPerson={item.insuredPerson}
               />
             ))
          }
       </ScrollView>
    )
  }
}

// <TouchableOpacity
//    key = {item.baodan_id}
//    style = {s.listItem}
//    onPress = {() => Alert.alert('🔥', '还么有实现')}>
//    <Text style = {{color: "red", textAlign: 'center'}}>
//       {item.baodan_id}
//    </Text>
// </TouchableOpacity>

//keyExtractor={item => item.baodan_id.toString()}
// renderItem={({ item }) => (
//   <Text>{item.baodanNumber}</Text>
// )}
// data={this.props.baodan.baodan}
// <BaodanItem
//   id={item.baodan_id}
//   baodanNumber={item.baodanNumber}
//   insurePropertyType={item.insurePropertyType}
//   insureDate={item.insureDate}
// />

const mapStateToProps = state  => {
  return {
    baodan: state.baodan,
  }
}

export default connect(mapStateToProps)(BaodanList)
