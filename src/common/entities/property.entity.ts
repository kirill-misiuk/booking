import { Column, Entity, OneToMany } from 'typeorm/index';

import { PropertyType } from '../enums';
import { BaseEntity } from './base.entity';
import { RoomEntity } from './room.entity';

@Entity('property')
export class PropertyEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'text', nullable: true })
  address?: string;

  @Column({ type: 'enum', enum: PropertyType })
  type: PropertyType;

  @OneToMany(() => RoomEntity, room => room.property, { cascade: true, onDelete: 'CASCADE' })
  rooms: RoomEntity[];
}
