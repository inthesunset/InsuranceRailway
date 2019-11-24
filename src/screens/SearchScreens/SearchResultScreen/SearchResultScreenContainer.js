import { compose, hoistStatics, withHandlers } from 'recompose';
import SearchResultScreen from './SearchResultScreenView';
import screens  from '../../../navigation/screens';

const enhancer = compose(
  withHandlers({
    navigateToClaimFile: props => () => props.navigation.navigate(screens.ClaimFile),
    resetSearch: props => () => props.navigation.navigate(screens.SearchCondition),
  }),
);

export default hoistStatics(enhancer)(SearchResultScreen);
