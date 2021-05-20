import { IRoom } from 'src/common/types/room.dto';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm/index';

import { BaseEntity } from './base.entity';
import { PropertyEntity } from './property.entity';
import { ReservationEntity } from './reservation.entity';

@Entity('room')
export class RoomEntity extends BaseEntity implements IRoom {
  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => ReservationEntity, reservation => reservation.room, { cascade: false, onDelete: 'CASCADE' })
  reservation: ReservationEntity[];

  @ManyToOne(() => PropertyEntity, property => property.rooms, { nullable: false, onDelete: 'CASCADE' })
  property: PropertyEntity;
}
