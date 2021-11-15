import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ConsultaVeterinaria, ConsultaVeterinariaRelations, Proovedor, Mascota} from '../models';
import {ProovedorRepository} from './proovedor.repository';
import {MascotaRepository} from './mascota.repository';

export class ConsultaVeterinariaRepository extends DefaultCrudRepository<
  ConsultaVeterinaria,
  typeof ConsultaVeterinaria.prototype.id,
  ConsultaVeterinariaRelations
> {

  public readonly proovedor: BelongsToAccessor<Proovedor, typeof ConsultaVeterinaria.prototype.id>;

  public readonly mascota: BelongsToAccessor<Mascota, typeof ConsultaVeterinaria.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ProovedorRepository') protected proovedorRepositoryGetter: Getter<ProovedorRepository>, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>,
  ) {
    super(ConsultaVeterinaria, dataSource);
    this.mascota = this.createBelongsToAccessorFor('mascota', mascotaRepositoryGetter,);
    this.registerInclusionResolver('mascota', this.mascota.inclusionResolver);
    this.proovedor = this.createBelongsToAccessorFor('proovedor', proovedorRepositoryGetter,);
    this.registerInclusionResolver('proovedor', this.proovedor.inclusionResolver);
  }
}
