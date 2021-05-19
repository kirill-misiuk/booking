import { IBase } from './base.type';

export interface IUser extends IBase {
  firstName: string;
  lastName: string;
  email: string;
}
