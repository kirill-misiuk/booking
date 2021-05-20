import { IBase } from './base.type';
import { IRoom } from './room.dto';
import { IUser } from './user.type';

export interface IReservation extends IBase {
  comment?: string;
  room: IRoom;
  user: IUser;
  startDate: Date;
  endDate: Date;
}
