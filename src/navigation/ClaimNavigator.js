import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import ClaimScreen from '../screens/ClaimScreens';
import ClaimFileScreen from '../screens/ClaimFileScreens';

export default createStackNavigator({
  [screens.Claim]: {screen: ClaimScreen},
  [screens.ClaimFile]: {screen: ClaimFileScreen},
},{
  headerTransitionPreset: 'uikit',
  initialRouteName: screens.Claim,
});
