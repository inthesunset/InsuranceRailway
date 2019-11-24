import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import SearchConditionScreen from '../screens/SearchScreens/SearchConditionScreen';
import SearchResultScreen from '../screens/SearchScreens/SearchResultScreen';

//not sure how to add logic judgement to select screen ...
export default createStackNavigator({
  [screens.SearchCondition]: {screen: SearchConditionScreen},
  [screens.SearchResults]: {screen: SearchResultScreen}
},{
  headerTransitionPreset: 'uikit',
  initialRouteName: screens.SearchCondition,
});
