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
import { Input, Button, Icon, Divider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
import { Pages } from 'react-native-pages';
import ModalDropdown from 'react-native-modal-dropdown';
import { add_baodan } from '../../modules/actions/baodan';
import dateFormat from 'dateformat';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

class ClaimFile extends Component {
  constructor(props) {
    super(props);
     this.state = {
       readytobeSubmitted: true,
       fileOptions: ["手机终端APP", "其他"],
       fileType: '',
       insurePropertyType: '',
       eventDate: dateFormat(new Date(), "yyyy-mm-dd hh:MM"),
       fileDate: '',
       nameerror: '',
       eventerror: '',
       zoneerror: '',
       addresserror: '',
       abstracterror: '',
     };
     this.validate = this.validate.bind(this);
  }

  validate(){
    //validate every field here
    if (this.state.readytobeSubmitted){
        this.setState({fileDate: dateFormat(new Date(), "yyyy-mm-dd hh:MM")}, function(){
          this.props.navigation.navigate(screens.ClaimFile);
          this.props.submitForm();
        });
    }
    else {
      Alert.alert('🔥', '填写数据有误，请返回修改');
    }
  }

  render() {
    return (
      <Pages indicatorColor='red'>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={s.container}
        >
          <KeyboardAvoidingView
            behavior="padding"
          >
            <Text style={[s.normalText, {fontSize: 30}]}>
              保单信息
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginBottom: 20}} />
            <Text style={s.normalText} >保单编号: {this.props.selected_baodan.baodan_id}</Text>
            <Text style={s.normalText}>险种: {this.props.selected_baodan.insurePropertyType}</Text>
            <Text style={s.normalText}>被保险人: {this.props.selected_baodan.nameInput}</Text>
            <Text style={s.normalText}>保险始期: {this.props.selected_baodan.startDate}</Text>
            <Text style={s.normalText}>保险止期: {this.props.selected_baodan.endDate}</Text>
            <Text style={s.normalText}>渠道细分: {"not provided yet"}</Text>
          </KeyboardAvoidingView>
        </ScrollView>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={s.container}
        >
          <KeyboardAvoidingView
            behavior="padding"
          >
            <Text style={[s.normalText, {fontSize: 30}]}>
              理赔单
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.8, marginBottom: 20}} />
            <Text style={[s.normalText, {marginBottom: 20}]}>理赔单编号: {this.props.selected_baodan.baodan_id}</Text>
            <View style={{marginTop:20, alignItems: 'center'}}>
              <Input placeholder='某某某' errorStyle={{ color: 'red' }} errorMessage= {this.state.nameerror}
                label='报案人' containerStyle={s.inputContainer}
              />
              <ModalDropdown
                style = {s.button}
                textStyle = {s.buttonText}
                dropdownStyle = {s.dropdown}
                dropdownTextStyle = {s.normalText}
                dropdownTextHighlightStyle = {s.highlightedRowText}
                defaultValue = {"请选择报案方式"}
                options = {this.state.fileOptions}
                onSelect = {
                    (index, value) => {
                      this.setState({fileType: String(value)})}
                    }
              />
              <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginTop:10, marginBottom: 20}} />
              <DatePicker
                style={{width: 180}}
                date={this.state.eventDate}
                mode="datetime"
                format="YYYY-MM-DD HH:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderWidth:1,
                  },
                  dateText: {
                    color: 'black',
                  },
                }}
                minuteInterval={10}
                onDateChange={(datetime) => {this.setState({eventDate: datetime});}}
              />
              <Text style={Calendarstyles.instructions}>出险时间: {this.state.eventDate}</Text>
              <Input placeholder='原因' errorStyle={{ color: 'red' }} errorMessage= {this.state.eventerror}
                label='出险原因' containerStyle={s.inputContainer}
              />
              <Input placeholder='中华人民共和国' errorStyle={{ color: 'red' }} errorMessage= {this.state.zoneerror}
                label='出险区域' containerStyle={s.inputContainer}
              />
              <Input placeholder='XX省XX市XX路' errorStyle={{ color: 'red' }} errorMessage= {this.state.addresserror}
                label='出险地点' containerStyle={s.inputContainer}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={s.container}
        >
          <KeyboardAvoidingView
            behavior="padding"
          >
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 30}}>
              出险摘要
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginBottom: 20}} />
            <Input placeholder='请在此输入' errorStyle={{ color: 'red' }} errorMessage= {this.state.abstracterror} multiline={true} containerStyle={[s.inputContainer, {marginBottom: 50}]} />
            <Button
              title={"递交理赔申请"}
              containerStyle={{ flex: -1 }}
              buttonStyle={s.signUpButton}
              titleStyle={s.signUpButtonText}
              onPress={this.validate}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </Pages>
    );
  }
}

const Calendarstyles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5
  }
});

ClaimFile.navigationOptions = ({navigation}) =>({
  title: '填写理赔单',
});

mapStateToProps = state => {
  return {
    selected_baodan: state.search.selected_baodan
  }
}

export default connect(mapStateToProps)(ClaimFile);
