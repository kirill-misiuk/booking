import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Connection, DeleteResult, FindManyOptions, FindOneOptions } from 'typeorm/index';

import { CreatePropertyDto, PropertyEntity } from '../../common';

@Injectable()
export class PropertyService {
  constructor(private readonly connection: Connection) {
  }

  private readonly relations = ['rooms'];

  create(data: CreatePropertyDto): Observable<PropertyEntity> {
    return from(this.connection.getRepository(PropertyEntity).save(data));
  }

  find(options?: FindManyOptions<PropertyEntity>): Observable<PropertyEntity[]> {
    options = options || { relations: this.relations };
    return from(this.connection.getRepository(PropertyEntity).find(options));
  }

  findOne(cond: Partial<PropertyEntity>, options?: FindOneOptions<PropertyEntity>): Observable<PropertyEntity> {
    options = options || { relations: this.relations };
    return from(this.connection.getRepository(PropertyEntity).findOne(cond, options));
  }

  update(id: string, update: Partial<PropertyEntity>): Observable<PropertyEntity> {
    return from(this.connection.getRepository(PropertyEntity).update(id, update)).pipe(
      mergeMap(() => this.findOne({ id })),
    );
  }

  delete(id: string): Observable<DeleteResult> {
    return from(this.connection.getRepository(PropertyEntity).delete(id));
  }
}
