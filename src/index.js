import React, {Component} from 'react';
import T from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
//implement the splashscreen later on
import {BackHandler, View, Platform, UIManager} from 'react-native';
import { Provider } from 'react-redux';
import {compose, withState, withHandles, lifecycle} from 'recompose';
import store from './store';
import {globalStyles} from './styles';
// will add operations later on
import {appOperations} from './modules/app';
// will implement these later on
//import {loadAssets, loadFonts} from './utils';
import RootNavigatorContainer from './navigation';

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// use splashscreen to show splash
const App = (
  //{
  //showLoading,
  //asyncJob,
  //onFinish,
//}
) => {
  //loadAssets();
  //loadFonts();
  store.dispatch(appOperations.initialization());
  return (
    <Provider store={store}>
      <View style={globalStyles.fillAll}>
        <RootNavigatorContainer />
      </View>
    </Provider>
  );
};

const enhance = compose(
  lifecycle({
    componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', ()=>{return true;});
      SplashScreen.hide();
    }
  })
);

export default enhance(App);
