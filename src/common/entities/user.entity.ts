import { Column, Entity, OneToMany } from 'typeorm/index';

import { IUser } from '../types';
import { BaseEntity } from './base.entity';
import { ReservationEntity } from './reservation.entity';

@Entity('user')
export class UserEntity extends BaseEntity implements IUser {
  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => ReservationEntity, reservation => reservation.user, { cascade: true, onDelete: 'CASCADE' })
  reservation: ReservationEntity[];
}
