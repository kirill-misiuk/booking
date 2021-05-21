import { Injectable, NotFoundException } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { Connection, DeleteResult, FindManyOptions, FindOneOptions } from 'typeorm/index';

import { CreateRoomDto, DateRangeDto, IRoom, RoomEntity } from '../../common';
import { PropertyService } from '../property/property.service';

@Injectable()
export class RoomService {
  constructor(
    private readonly connection: Connection,
    private readonly propertyService: PropertyService,
  ) {
  }

  private readonly relations = ['reservation', 'property'];

  create(data: CreateRoomDto): Observable<RoomEntity> {
    return this.propertyService.findOne({ id: data.propertyId }).pipe(
      mergeMap(property => {
        if (!property) {
          throw new NotFoundException('property not found');
        }
        return from(this.connection.getRepository(RoomEntity).save({ ...data, property }));
      }),
    );
  }

  find(options?: FindManyOptions<RoomEntity>): Observable<RoomEntity[]> {
    options = options || { relations: this.relations };
    return from(this.connection.getRepository(RoomEntity).find(options));
  }

  findOne(cond: Partial<RoomEntity>, options?: FindOneOptions<RoomEntity>): Observable<RoomEntity> {
    options = options || { relations: this.relations };
    return from(this.connection.getRepository(RoomEntity).findOne(cond, options));
  }

  delete(id: string): Observable<DeleteResult> {
    return from(this.connection.getRepository(RoomEntity).delete(id));
  }

  findAvailableRooms(dateRange: DateRangeDto): Observable<IRoom[]> {
    const query = this.connection.getRepository(RoomEntity).createQueryBuilder('room');
    query.leftJoinAndSelect('room.reservation', 'reservation')
      .andWhere(`reservation."startDate"::date > :to::date OR reservation."endDate"::date <= :from:: date OR reservation IS NULL`, {
        from: new Date(dateRange.from).toUTCString(),
        to: new Date(dateRange.to).toUTCString(),
      });
    return from(query.getMany()).pipe(tap(console.log));
  }
}
