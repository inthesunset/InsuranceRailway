import { compose, hoistStatics, withHandlers } from 'recompose';
import SelectInsureTypeScreen from './SelectInsureTypeView';
import screens from '../../../navigation/screens';

const enhancer = compose(
  withHandlers({
    fillForm: props => () => props.navigation.navigate(screens.InsureForm),
  }),
);
export default hoistStatics(enhancer)(SelectInsureTypeScreen);
