import { Injectable, NotFoundException } from '@nestjs/common';
import { forkJoin, from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Connection, DeleteResult, FindManyOptions } from 'typeorm/index';

import { CreateReservationDto, DateRangeDto, ReservationEntity } from '../../common';
import { RoomService } from '../room/room.service';
import { UserService } from '../user/user.service';

@Injectable()
export class ReservationService {
  constructor(
    private readonly connection: Connection,
    private readonly roomService: RoomService,
    private readonly userService: UserService,
  ) {
  }

  private readonly relations = ['room', 'user'];

  create(data: CreateReservationDto): Observable<ReservationEntity> {
    return this.roomService.findAvailableRooms({ from: data.from, to: data.to }).pipe(
      mergeMap(rooms => {
        const roomIds = rooms.map(room => room.id);
        if (!roomIds.includes(data.roomId)) {
          throw new NotFoundException('room is not available');
        }
        return forkJoin({
          room: this.roomService.findOne({ id: data.roomId }),
          user: this.userService.findOne({ id: data.userId }),
        }).pipe(
          mergeMap(({ room, user }) => from(this.connection.getRepository(ReservationEntity).save({
            ...data,
            startDate:
            data.from,
            endDate:
            data.to,
            room,
            user,
          }))),
        );
      }),
    );
  }

  find(options?: FindManyOptions<ReservationEntity>): Observable<ReservationEntity[]> {
    options = options || { relations: this.relations };
    return from(this.connection.getRepository(ReservationEntity).find(options));
  }

  delete(id: string): Observable<DeleteResult> {
    return from(this.connection.getRepository(ReservationEntity).delete(id));
  }

  findNotAvailableDateRanges(dateRange: DateRangeDto): Observable<any> {
    const query = this.connection.getRepository(ReservationEntity).createQueryBuilder('reservation');
    query.andWhere(`not reservation."startDate"::date <= :to::date OR reservation."endDate"::date > :from:: date`, {
      from: new Date(dateRange.from).toUTCString(),
      to: new Date(dateRange.to).toUTCString(),
    });
    return from(query.getMany());
  }
}
