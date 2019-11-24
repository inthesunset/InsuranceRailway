import { compose, hoistStatics } from 'recompose';
import VisitorWelcomeScreenView from './VisitorWelcomeScreenView';

const enhancer = compose(
);

export default hoistStatics(enhancer)(VisitorWelcomeScreenView);
