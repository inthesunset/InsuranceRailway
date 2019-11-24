import { compose, hoistStatics, withHandlers } from 'recompose';
import ClaimScreen from './ClaimScreenView';

const enhancer = compose(
  withHandlers({
    navigateToSearch: props => () => props.navigation.navigate(screens.Search),
  }),
);

export default hoistStatics(enhancer)(ClaimScreen);
