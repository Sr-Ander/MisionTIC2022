import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Proovedor} from '../models';
import {ProovedorRepository} from '../repositories';

export class ProveedorController {
  constructor(
    @repository(ProovedorRepository)
    public proovedorRepository : ProovedorRepository,
  ) {}

  @post('/proovedors')
  @response(200, {
    description: 'Proovedor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Proovedor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proovedor, {
            title: 'NewProovedor',
            exclude: ['id'],
          }),
        },
      },
    })
    proovedor: Omit<Proovedor, 'id'>,
  ): Promise<Proovedor> {
    return this.proovedorRepository.create(proovedor);
  }

  @get('/proovedors/count')
  @response(200, {
    description: 'Proovedor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Proovedor) where?: Where<Proovedor>,
  ): Promise<Count> {
    return this.proovedorRepository.count(where);
  }

  @get('/proovedors')
  @response(200, {
    description: 'Array of Proovedor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Proovedor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Proovedor) filter?: Filter<Proovedor>,
  ): Promise<Proovedor[]> {
    return this.proovedorRepository.find(filter);
  }

  @patch('/proovedors')
  @response(200, {
    description: 'Proovedor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proovedor, {partial: true}),
        },
      },
    })
    proovedor: Proovedor,
    @param.where(Proovedor) where?: Where<Proovedor>,
  ): Promise<Count> {
    return this.proovedorRepository.updateAll(proovedor, where);
  }

  @get('/proovedors/{id}')
  @response(200, {
    description: 'Proovedor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Proovedor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Proovedor, {exclude: 'where'}) filter?: FilterExcludingWhere<Proovedor>
  ): Promise<Proovedor> {
    return this.proovedorRepository.findById(id, filter);
  }

  @patch('/proovedors/{id}')
  @response(204, {
    description: 'Proovedor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proovedor, {partial: true}),
        },
      },
    })
    proovedor: Proovedor,
  ): Promise<void> {
    await this.proovedorRepository.updateById(id, proovedor);
  }

  @put('/proovedors/{id}')
  @response(204, {
    description: 'Proovedor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proovedor: Proovedor,
  ): Promise<void> {
    await this.proovedorRepository.replaceById(id, proovedor);
  }

  @del('/proovedors/{id}')
  @response(204, {
    description: 'Proovedor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proovedorRepository.deleteById(id);
  }
}
