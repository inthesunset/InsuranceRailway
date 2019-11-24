import { compose, hoistStatics, withHandlers} from 'recompose';
import InsureFormScreen, {getValue} from './InsureFormScreenView';
import screens  from '../../../navigation/screens';

const enhancer = compose(
  withHandlers({
  submitForm: props => () => props.navigation.navigate(screens.Home),
  }),
);

export default hoistStatics(enhancer)(InsureFormScreen);
