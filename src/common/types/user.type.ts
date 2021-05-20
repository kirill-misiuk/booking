import { IBase } from './base.type';
import { IReservation } from './reservation.type';

export interface IUser extends IBase {
  firstName: string;
  lastName: string;
  email: string;
  reservation?: IReservation[];
}
