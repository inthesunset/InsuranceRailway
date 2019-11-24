import React, { Component } from 'react';
import { View, Alert, StyleSheet, KeyboardAvoidingView, Text, ScrollView, Dimensions } from 'react-native';
import { Pages } from 'react-native-pages';
import { Input, Divider, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { add_baodan } from '../../../modules/actions/baodan';
//import { StackActions, NavigationActions } from 'react-navigation';
import screens from '../../../navigation/screens';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const setValue = async (key, value) => {
  try {
    const username = await AsyncStorage.getItem('username');
    const detail = await AsyncStorage.getItem(username);
    ret = JSON.parse(detail);
    if (ret == null) {
      ret = {};
      ret["baodan"] = [];
      // expand when more keys are stored beside "baodan"
    }

    if (!(key in ret)) {
      ret[key] = [];
    }
    ret[key].push(value);
    await AsyncStorage.setItem(username, JSON.stringify(ret));
  } catch(e) {
    console.log('Error setting ' + key, e);
  }
}
export const getValue = async (key) => {
  try {
    const username = await AsyncStorage.getItem('username');
    console.log(username);
    const detail = await AsyncStorage.getItem(username);
    console.log(detail);
    console.log(JSON.parse(detail)[key]);
    return JSON.parse(detail)[key];

  } catch(e) {
    console.log('Error getting ' + key, e);
  }
}

export const setUsername = async (value) => {
  try {
    await AsyncStorage.setItem("username", value);
  } catch(e) {
    console.log('Error setting username ', e);
  }
}



class InsureForm extends Component {
  constructor(props) {
    super(props);
     this.state = {
       insuredPerson: 'XXX',
       readytobeSubmitted: true,
       insurePropertyOptions: ["固定资产", "..."],
       insurePropertyType: '',
       startDate: '2016-05-05 20:00',
       endDate: '2016-05-05 20:00',
       nameerror: '',
       phoneerror: '',
       addresserror: '',
       postalcodeerror: '',
       idtypeerror: '',
       idnumbererror: '',
       occupationytypeerror: '',
       insureAddressError: '',
       insurePostalCodeError: '',
       insureDate: 'xxxx-xx-xx',
       baodanNumber: '00000001',
     };
     this.validate = this.validate.bind(this);
     //regarding how to use ref, see example in page https://github.com/facebook/react-native/issues/511
     // basically:
    //  <TextInput
    //   value={this.state.username}
    //   onChangeText={username => this.setState({username})}
    //   onSubmitEditing={this.refs.passwordInput.focus}
    // />
    //
    // <TextInput
    //   ref={ref => (this.passwordInput = ref)}
    //   value={this.state.password}
    //   onChangeText={password => this.setState({password})}
    //   onSubmitEditing={this._submitForm}
    // />
  }


  //Async sorage sstructure for forms here: {'username': {'baodan':[{}, {}], 'lipeidan':[]},...}
  validate(){
    //validate every field here
    if (this.state.readytobeSubmitted){
        // we can use for loop or map for the rest like nameInput.
        //setUsername('test');
        // setValue('baodan', this.state).then(() => {Alert.alert('🔥', '成功保存')})
        //   .catch((error) => { Alert.alert('🔥', error) });
        let current_date = new Date().toDateString();
        console.log(current_date);
        console.log("state.insuredPerson: "+this.state.insuredPerson);
        this.setState({insureDate: current_date}, function(){
          this.props.add_baodan(this.state);
          //this.props.navigation.dispatch(resetAction);
          this.props.navigation.navigate(screens.Insure);
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
          contentContainerStyle={styles.container}
        >
          <KeyboardAvoidingView
            behavior="padding"
          >
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 30}}>
              被保险人信息
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginBottom: 20}} />
            <Input placeholder='某某' errorStyle={{ color: 'red' }} errorMessage= {this.state.nameerror}
              label='联系人姓名' onChangeText={insuredPerson => this.setState({insuredPerson})}
            />
            <Input placeholder='+86' errorStyle={{ color: 'red' }} errorMessage= {this.state.phoneerror}
              label='手机号' containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
            />
            <Input placeholder='某某市' errorStyle={{ color: 'red' }} errorMessage= {this.state.addresserror}
              label='地址' containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
            />
            <Input placeholder='100000' errorStyle={{ color: 'red' }} errorMessage= {this.state.postalcodeerror}
              label='邮编' containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
            />
            <Input placeholder='身份证' errorStyle={{ color: 'red' }} errorMessage= {this.state.idtypeerror}
              label='证件类型' containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
            />
            <Input placeholder='1XXX' errorStyle={{ color: 'red' }} errorMessage= {this.state.idnumbererror}
              label='证件号码' containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
            />
            <Input placeholder='运输' errorStyle={{ color: 'red' }} errorMessage= {this.state.occupationytypeerror}
              label='行业类型' containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}
        >
          <KeyboardAvoidingView
            behavior="padding"
          >
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 30}}>
              保险标的坐落地址
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginBottom: 20}} />
            <Input placeholder='XX市XX路XX号' errorStyle={{ color: 'red' }} errorMessage= {this.state.insureAddressError}
              label='被保险的地址'
            />
            <Input placeholder='100000' errorStyle={{ color: 'red' }} errorMessage= {this.state.insurePostalCodeError}
              label='被保险的地址邮编' containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
            />
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 30, marginTop: 40}}>
              保险期间
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginBottom: 20}} />
            <DatePicker
              style={{width: 180}}
              date={this.state.startDate}
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
              onDateChange={(datetime) => {this.setState({startDate: datetime});}}
            />
            <Text style={Calendarstyles.instructions}>开始日期: {this.state.startDate}</Text>
            <DatePicker
              style={{width: 180}}
              date={this.state.endDate}
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
              onDateChange={(datetime) => {this.setState({endDate: datetime});}}
            />
            <Text style={Calendarstyles.instructions}>截止日期: {this.state.endDate}</Text>
          </KeyboardAvoidingView>
        </ScrollView>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}
        >
          <KeyboardAvoidingView
            behavior="padding"
          >
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 30}}>
              主险
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginBottom: 20}} />

            <ModalDropdown
              style = {styles.button}
              textStyle = {styles.buttonText}
              dropdownStyle = {styles.dropdown}
              dropdownTextStyle = {styles.rowText}
              dropdownTextHighlightStyle = {styles.highlightedRowText}
              defaultValue = {"请选择保险标的物类别"}
              options = {this.state.insurePropertyOptions}
              onSelect = {
                  (index, value) => {
                    this.setState({insurePropertyType: String(value)})}
                  }
            />
            <Input placeholder='0.0' errorStyle={{ color: 'red' }} errorMessage= {this.state.insureAddressError}
              containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
              label='保险金额（元）'
            />
            <Input placeholder='0.0000' errorStyle={{ color: 'red' }} errorMessage= {this.state.insureAddressError}
              containerStyle={{width: SCREEN_WIDTH*0.3, marginTop: 20}}
              label='费率（%）'
            />
            <ModalDropdown
              style = {styles.button}
              textStyle = {styles.buttonText}
              dropdownStyle = {styles.dropdown}
              dropdownTextStyle = {styles.rowText}
              dropdownTextHighlightStyle = {styles.highlightedRowText}
              defaultValue = {"选择保险价值确认方式"}
              options = {this.state.insurePropertyOptions}
              onSelect = {(index, value) => this.setState({insurePropertyType: String(value)})}
            />
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 30}}>
              附加险 ...
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginBottom: 20}} />
          </KeyboardAvoidingView>
        </ScrollView>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}
        >
          <KeyboardAvoidingView
            behavior="padding"
          >
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 30}}>
              总计
            </Text>
            <Divider style={{ backgroundColor: 'lightblue', height: 5,  width: SCREEN_WIDTH*0.5, marginBottom: 20}} />
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 20}}>
              主险费用：CNY {this.state.mainInsureAmount}元
            </Text>
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 20}}>
              附加险费用：CNY {this.state.appendixInsureAmount}元
            </Text>
            <Text style={{fontFamily: 'UbuntuBold', fontSize: 20}}>
              费用总计：CNY {this.state.appendixInsureAmount + this.state.mainInsureAmount}元
            </Text>
            <Button
              title={"递交保单申请"}
              containerStyle={{ flex: -1 }}
              buttonStyle={styles.signUpButton}
              titleStyle={styles.signUpButtonText}
              onPress={this.validate}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </Pages>
    );
  }
}


// const resetAction = StackActions.reset({
//      index: 0,
//      key: screens.Insure,
//      actions: [
//           NavigationActions.navigate({ routeName: 'Main' })
//      ],
// });

const Calendarstyles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5
  }
});


InsureForm.navigationOptions = ({navigation}) =>({
  title: '填写保单',
});



export default connect(null,{add_baodan})(InsureForm);
