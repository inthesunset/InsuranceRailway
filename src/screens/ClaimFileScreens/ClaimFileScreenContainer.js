import { compose, hoistStatics, withHandlers } from 'recompose';
import ClaimFileScreen from './ClaimFileScreenView';

const enhancer = compose(
  withHandlers({
    //submitForm: props => () => props.navigation.navigate(screens.Home),
  }),
);

export default hoistStatics(enhancer)(ClaimFileScreen);
