import { compose, hoistStatics, withHandlers } from 'recompose';
import SignInScreen from './SignInScreenView';
import screens  from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    navigateToRestorePassword: props => () => props.navigation.navigate(screens.RestorePassword),
    signIn: props => () => props.navigation.navigate(screens.AuthorizedApplication),
    navigateToSignUp: props => () => props.navigation.navigate(screens.SignUp),
  }),
);

export default hoistStatics(enhancer)(SignInScreen);
