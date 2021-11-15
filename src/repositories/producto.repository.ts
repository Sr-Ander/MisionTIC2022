import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Producto, ProductoRelations, Proovedor} from '../models';
import {ProovedorRepository} from './proovedor.repository';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {

  public readonly proovedor: BelongsToAccessor<Proovedor, typeof Producto.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ProovedorRepository') protected proovedorRepositoryGetter: Getter<ProovedorRepository>,
  ) {
    super(Producto, dataSource);
    this.proovedor = this.createBelongsToAccessorFor('proovedor', proovedorRepositoryGetter,);
    this.registerInclusionResolver('proovedor', this.proovedor.inclusionResolver);
  }
}
