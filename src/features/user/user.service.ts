import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Connection, DeleteResult, FindManyOptions, FindOneOptions } from 'typeorm/index';

import { CreateUserDto, UserEntity } from '../../common';

@Injectable()
export class UserService {
  constructor(private readonly connection: Connection) {}

  private readonly relations = ['reservation'];

  create(data: CreateUserDto): Observable<UserEntity> {
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

  delete(id: string): Observable<DeleteResult> {
    return from(this.connection.getRepository(UserEntity).delete(id));
  }
}
