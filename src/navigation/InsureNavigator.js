import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import InsureScreen from '../screens/InsureScreens/SelectInsureType';
import InsureFormScreen from '../screens/InsureScreens/InsureFormScreen';

export default createStackNavigator({
  [screens.Insure]: {screen: InsureScreen},
  [screens.InsureForm]:{screen: InsureFormScreen},
},{
  headerTransitionPreset: 'uikit',
  initialRouteName: screens.Insure,
});
