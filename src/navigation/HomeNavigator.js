import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import VisitorWelcomeScreen from '../screens/VisitorWelcomeScreen';

//not sure how to add logic judgement to select screen ...
export default createStackNavigator({
  [screens.VisitorWelcome]: {screen: VisitorWelcomeScreen}
},{
  headerTransitionPreset: 'uikit',
});
