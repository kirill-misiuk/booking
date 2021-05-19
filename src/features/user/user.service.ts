import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Connection, FindManyOptions, FindOneOptions } from 'typeorm/index';

import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly connection: Connection) {}

  private readonly relations = [];

  create(data: any): Observable<UserEntity> {
    return from(this.connection.getRepository(UserEntity).save(data));
  }

  find(options?: FindManyOptions<UserEntity>): Observable<UserEntity[]> {
    options = options || { relations: this.relations };
    return from(this.connection.getRepository(UserEntity).find(options));
  }

  findOne(cond: Partial<UserEntity>, options?: FindOneOptions<UserEntity>): Observable<UserEntity> {
    options = options || { relations: this.relations };
    return from(this.connection.getRepository(UserEntity).findOne(cond, options));
  }

  update(id: string, update: Partial<UserEntity>): Observable<UserEntity> {
    return from(this.connection.getRepository(UserEntity).update(id, update)).pipe(
      mergeMap(() => this.findOne({ id })),
    );
  }

  delete(id: string): Observable<any> {
    return from(this.connection.getRepository(UserEntity).delete(id));
  }
}
