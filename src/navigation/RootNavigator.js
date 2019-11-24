import React from 'react';
import T from 'prop-types';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {connect} from 'react-redux';
import screens from './screens';
import {addNavigationListener } from '../store';
import AuthorizedApplicationNavigator from './AuthorizedApplicationNavigator';
import UnauthorizedApplicationNavigator from './UnauthorizedApplicationNavigator';

export const RootNavigator = createSwitchNavigator({
  [screens.AuthorizedApplication]: {screen: AuthorizedApplicationNavigator},
  [screens.UnauthorizedApplication]: {screen: UnauthorizedApplicationNavigator}
}, {initialRouteName: screens.UnauthorizedApplication});

const RootNavigatorContainer = createAppContainer(RootNavigator);
// = ({
//   dispatch,
//   state,
// }) => (
//   <RootNavigator {
//     dispatch,
//     state,
//     addListener: addNavigationListener,
//   } />
// );
//
// RootNavigatorContainer.propTypes = {
//   dispatch: T.func,
//   state: T.object,
// };

export default connect(
  state => ({state: state.loginAndout}),
)(RootNavigatorContainer);
