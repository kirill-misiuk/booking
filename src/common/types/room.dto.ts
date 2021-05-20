import { IBase, IProperty } from '../index';
import { IReservation } from './reservation.type';

export interface IRoom extends IBase {
  title: string;
  description?: string;
  reservation: IReservation[];
  property: IProperty;
}
