import React, { Component } from 'react';
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
import { login } from '../../modules/actions/loginAndout';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { setUsername } from '../InsureScreens/InsureFormScreen/InsureFormScreenView';
// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const USER_COOL = require('../../../assets/images/user-cool.png');
const USER_STUDENT = require('../../../assets/images/user-student.png');
const USER_HP = require('../../../assets/images/user-hp.png');

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;



class SignUpScreenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      selectedType: null,
      username: '',
      email: '',
      password: '',
    };

    this.setSelectedType = this.setSelectedType.bind(this);
    this.signin = this.signin.bind(this);
  }

  signin() {
    LayoutAnimation.easeInEaseOut();
    const {
      isLoading,
      selectedType,
      email,
      password,
      username,
      user,
    } = this.state;
    if (
      password && user
    ) {
      this.setState({ isLoading: true });
      setUsername(username);
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ isLoading: false });
        this.props.login(user);
        this.props.signIn();
      }, 1500);
    }
  }

  FillEmailOrUsername() {
    const { user } = this.state;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = re.test(user);
    LayoutAnimation.easeInEaseOut();
    if (!emailValid) {
      this.setState({ username: user });}
    else {this.setState({ email: user });}
  }

  setSelectedType = selectedType =>
    LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });

  render() {
    const {
      isLoading,
      selectedType,
      email,
      password,
      username,
      user,
    } = this.state;

    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={styles.formContainer}
        >
          <Text style={styles.signUpText}>登陆</Text>
          <Text style={styles.whoAreYouText}>选择角色</Text>
          <View style={styles.userTypesContainer}>
            <UserTypeItem
              label="投保人"
              labelColor="#ECC841"
              image={USER_COOL}
              onPress={() => this.setSelectedType('customer')}
              selected={selectedType === 'customer'}
            />
            <UserTypeItem
              label="核查员"
              labelColor="#2CA75E"
              image={USER_STUDENT}
              onPress={() => this.setSelectedType('checker')}
              selected={selectedType === 'checker'}
            />
            <UserTypeItem
              label="调度员"
              labelColor="#36717F"
              image={USER_HP}
              onPress={() => this.setSelectedType('dispatcher')}
              selected={selectedType === 'dispatcher'}
            />
          </View>
          <View style={{ width: '80%', alignItems: 'center' }}>
            <FormInput
              refInput={input => (this.usernameInput = input)}
              icon="user"
              value={user}
              onChangeText={user => this.setState({ user })}
              placeholder="用户名或邮箱"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.FillEmailOrUsername();
                this.passwordInput.focus();
              }}
            />
            <FormInput
              refInput={input => (this.passwordInput = input)}
              icon="lock"
              value={password}
              onChangeText={password => this.setState({ password })}
              placeholder="密码"
              secureTextEntry
              returnKeyType="go"
              onSubmitEditing={() => {
                this.signin();
              }}
            />
          </View>
          <Button
            loading={isLoading}
            title="登陆"
            containerStyle={{ flex: -1 }}
            buttonStyle={styles.signUpButton}
            // linearGradientProps={{
            //   colors: ['#FF9800', '#F44336'],
            //   start: [1, 0],
            //   end: [0.2, 0],
            // }}
            //ViewComponent={LinearGradient}
            titleStyle={styles.signUpButtonText}
            onPress={this.signin}
            disabled={isLoading}
          />
        </KeyboardAvoidingView>
        <View style={styles.loginHereContainer}>
          <Text style={styles.alreadyAccountText}>
            没有账号？
          </Text>
          <Button
            title="创建账号"
            titleStyle={styles.loginHereText}
            containerStyle={{ flex: -1 }}
            buttonStyle={{ backgroundColor: 'transparent' }}
            underlayColor="transparent"
            onPress={this.props.navigateToSignUp}
          />
        </View>
      </ScrollView>
    );
  }
}

export const UserTypeItem = props => {
  const { image, label, labelColor, selected, ...attributes } = props;
  return (
    <TouchableOpacity {...attributes}>
      <View
        style={[
          styles.userTypeItemContainer,
          selected && styles.userTypeItemContainerSelected,
        ]}
      >
        <Text style={[styles.userTypeLabel, { color: labelColor }]}>
          {label}
        </Text>
        <Image
          source={image}
          style={[
            styles.userTypeMugshot,
            selected && styles.userTypeMugshotSelected,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};


export default connect(null,{login})(SignUpScreenView);

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
