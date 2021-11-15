import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Proovedor, ProovedorRelations} from '../models';

export class ProovedorRepository extends DefaultCrudRepository<
  Proovedor,
  typeof Proovedor.prototype.id,
  ProovedorRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Proovedor, dataSource);
  }
}
