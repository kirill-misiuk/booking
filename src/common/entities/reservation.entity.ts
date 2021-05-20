import { Column, Entity, ManyToOne } from 'typeorm/index';

import { IReservation } from '../index';
import { BaseEntity } from './base.entity';
import { RoomEntity } from './room.entity';
import { UserEntity } from './user.entity';

@Entity('reservation')
export class ReservationEntity extends BaseEntity implements IReservation {
  @Column({ nullable: true })
  comment?: string;

  @ManyToOne(() => RoomEntity, room => room.reservation, { nullable: true, onDelete: 'CASCADE' })
  room: RoomEntity;

  @ManyToOne(() => UserEntity, user => user.reservation, { nullable: true, onDelete: 'CASCADE' })
  user: UserEntity;

  @Column({ type: 'timestamp with time zone' })
  startDate: Date;

  @Column({ type: 'timestamp with time zone' })
  endDate: Date;
}
