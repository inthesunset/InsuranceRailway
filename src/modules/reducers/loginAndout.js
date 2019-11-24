import { LOG_IN, LOG_OUT } from '../types/loginAndout';

const initialState = {
  username: '',
};

//need to clean up everything when logged out ...
const loginAndout = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {username: action.payload};
    }
    case LOG_OUT: {
      return {username: ''};
    }
    default: {
      return state;
    }
  }
};

export default loginAndout;
