import { compose, hoistStatics, withHandlers } from 'recompose';
import SearchConditionScreen from './SearchConditionScreenView';
import screens  from '../../../navigation/screens';

const enhancer = compose(
  withHandlers({
    navigateToResults: props => () => props.navigation.navigate(screens.SearchResults),
  }),
);

export default hoistStatics(enhancer)(SearchConditionScreen);
