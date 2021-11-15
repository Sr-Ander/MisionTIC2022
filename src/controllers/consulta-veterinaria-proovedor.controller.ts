import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ConsultaVeterinaria,
  Proovedor,
} from '../models';
import {ConsultaVeterinariaRepository} from '../repositories';

export class ConsultaVeterinariaProovedorController {
  constructor(
    @repository(ConsultaVeterinariaRepository)
    public consultaVeterinariaRepository: ConsultaVeterinariaRepository,
  ) { }

  @get('/consulta-veterinarias/{id}/proovedor', {
    responses: {
      '200': {
        description: 'Proovedor belonging to ConsultaVeterinaria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Proovedor)},
          },
        },
      },
    },
  })
  async getProovedor(
    @param.path.number('id') id: typeof ConsultaVeterinaria.prototype.id,
  ): Promise<Proovedor> {
    return this.consultaVeterinariaRepository.proovedor(id);
  }
}
