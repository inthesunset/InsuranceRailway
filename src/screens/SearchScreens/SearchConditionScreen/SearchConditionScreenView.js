import React, { Component } from 'react';
import {DrawerButton} from '../../../components';
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
import styles from './styles';
import { add_search_condition, add_filter_search_result } from '../../../modules/actions/search';
// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

class SearchConditionScreenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      selectedType: null,
      insureFormNumber: null,
      insureFormNumberValid: true,
      startDate: '2016-05-05 20:00',
      endDate: '2016-05-05 20:00',
      title: null,
    };
    this.do_search = this.do_search.bind(this);
    this.validateInsureFormNumber = this.validateInsureFormNumber.bind(this);
    this.filter_baodan = this.filter_baodan.bind(this);
  }

  filter_baodan(condition) {
      var res = this.props.baodan.baodan.filter((baodan) => {
      return baodan.baodan_id == condition.insureFormNumber ||
        (baodan.startDate.replace(/[-: ]/g, '') >= condition.startDate.replace(/[-: ]/g, '') &&
        baodan.endDate.replace(/[-: ]/g, '') <= condition.endDate.replace(/[-: ]/g, ''))
    })
    this.props.add_filter_search_result(res);
  }

  do_search() {
    LayoutAnimation.easeInEaseOut();
    const insureFormNumberValid = this.validateInsureFormNumber();
    if (
        insureFormNumberValid
    ) {
      this.setState({ isLoading: true });
      const {insureFormNumber, startDate, endDate, title, selectedType} = this.state;
      console.log("what in state gonna be in condition:" + endDate + JSON.stringify(this.state));
      const condition = { "selectedType": selectedType,
        "insureFormNumber": insureFormNumber,
        "startDate": startDate,
        "endDate": endDate,
        "title": title
      };
      this.props.add_search_condition(condition);
      //the search condition does change in reducer, but still not here. Confusing!
      console.log("search condition endDate:"+JSON.stringify(this.props.search));//.search_condition.endDate);
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ isLoading: false });
        console.log("the bandan info got in search condition:"+ this.props.baodan.baodan);
        if (this.props.baodan.baodan_ids == undefined || this.props.baodan.baodan_ids.length == 0) {
          Alert.alert('🔥', '您的保单列表为空');
        }
        else {
          this.filter_baodan(condition);
          this.props.navigateToResults();
        }
      }, 1500);
    }
  }

  validateInsureFormNumber() {
    const { insureFormNumber } = this.state;
    const insureFormNumberValid = !insureFormNumber || insureFormNumber.length == 8;
    LayoutAnimation.easeInEaseOut();
    this.setState({ insureFormNumberValid });
    insureFormNumberValid || this.insureFormNumberInput.shake();
    return insureFormNumberValid;
  }

  setSelectedType = selectedType =>
    LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });

  render() {
    const {
      isLoading,
      selectedType,
      insureFormNumber,
      insureFormNumberValid,
      startDate,
      endDate,
      title,
    } = this.state;
    console.log("the bandan info got in render search condition:"+ this.props.baodan.baodan_ids);
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={styles.formContainer}
        >
          <View style={{ width: '80%', alignItems: 'center' }}>
            <FormInput
              refInput={input => (this.insureFormNumberInput = input)}
              icon="user"
              value={insureFormNumber}
              onChangeText={insureFormNumber => this.setState({ insureFormNumber })}
              placeholder="保单号"
              returnKeyType="next"
              errorMessage={
                insureFormNumberValid ? null : "保单号有误"
              }
              onSubmitEditing={() => {
                this.validateInsureFormNumber();
                this.titleInput.focus();
              }}
            />
            <FormInput
              refInput={input => (this.titleInput = input)}
              icon="envelope"
              value={title}
              onChangeText={title => this.setState({ title })}
              placeholder="保单标题"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.dateInput.focus();
              }}
            />
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
                  color: 'white',
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
                  color: 'white',
                },
              }}
              minuteInterval={10}
              onDateChange={(datetime) => {this.setState({endDate: datetime});}}
            />
            <Text style={Calendarstyles.instructions}>截止日期: {this.state.endDate}</Text>
          </View>
          <Button
            loading={isLoading}
            title={"查询"}
            containerStyle={{ flex: -1 }}
            buttonStyle={styles.signUpButton}
            titleStyle={styles.signUpButtonText}
            onPress={this.do_search}
            disabled={isLoading}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
};

const Calendarstyles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5
  }
});


export const FormInput = props => {
  const { icon, refInput, ...otherProps } = props;
  return (
    <Input
      {...otherProps}
      ref={refInput}
      inputContainerStyle={styles.inputContainer}
      leftIcon={
        <Icon name={icon} type={'simple-line-icon'} color="#7384B4" size={18} />
      }
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor="#7384B4"
    />
  );
};

SearchConditionScreenView.navigationOptions = ({navigation}) =>({
  title: '查询',
  headerLeft: (
    <DrawerButton onPress={() => navigation.toggleDrawer()}/>
  ),
});

const mapStateToProps = state  => {
  return {
    baodan: state.baodan,
  }
}
//    search_condition: state.search.search_condition,
export default connect(mapStateToProps,{add_search_condition, add_filter_search_result})(SearchConditionScreenView);
