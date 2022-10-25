import { ICart } from './cart.interface';

export interface IUser {
  type: string;
  id: string;
}

export interface IAuthStatus {
  success: boolean;
  message: string;
}

export interface IReqStatus {
  success: boolean;
  message: string;
}

export interface IUserProfile {
  fullName: string;
  avatar: File | string;
  email: string;
  address: string;
  basket: ICart[];
  role: string;
  dateJoined: string | number;
}
