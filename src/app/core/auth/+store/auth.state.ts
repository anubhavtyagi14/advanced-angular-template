import { User } from '../models/user';

export const authFeatureKey = 'auth';

export interface AuthState {
  isLoggedIn: boolean;
  user: User;
}
export enum Status {
  INIT = 'INIT',
  IN_PROGRESS = 'IN_PROGRESS',
}
export const authInitialState: AuthState = {
  isLoggedIn: false,
  user: {
    email: '',
    token: '',
    fullName: '',
    userName: '',
    image: ''
  }
};

