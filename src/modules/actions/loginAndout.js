import { LOG_IN, LOG_OUT } from '../types/loginAndout';

export const login = username => ({
  type: LOG_IN,
  payload: username,
});

export const logout = () => ({
  type: LOG_OUT,
});
