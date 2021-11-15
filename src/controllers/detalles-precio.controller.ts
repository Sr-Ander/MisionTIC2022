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
import {DetallesPrecio} from '../models';
import {DetallesPrecioRepository} from '../repositories';

export class DetallesPrecioController {
  constructor(
    @repository(DetallesPrecioRepository)
    public detallesPrecioRepository : DetallesPrecioRepository,
  ) {}

  @post('/detalles-precios')
  @response(200, {
    description: 'DetallesPrecio model instance',
    content: {'application/json': {schema: getModelSchemaRef(DetallesPrecio)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetallesPrecio, {
            title: 'NewDetallesPrecio',
            exclude: ['id'],
          }),
        },
      },
    })
    detallesPrecio: Omit<DetallesPrecio, 'id'>,
  ): Promise<DetallesPrecio> {
    return this.detallesPrecioRepository.create(detallesPrecio);
  }

  @get('/detalles-precios/count')
  @response(200, {
    description: 'DetallesPrecio model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DetallesPrecio) where?: Where<DetallesPrecio>,
  ): Promise<Count> {
    return this.detallesPrecioRepository.count(where);
  }

  @get('/detalles-precios')
  @response(200, {
    description: 'Array of DetallesPrecio model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DetallesPrecio, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DetallesPrecio) filter?: Filter<DetallesPrecio>,
  ): Promise<DetallesPrecio[]> {
    return this.detallesPrecioRepository.find(filter);
  }

  @patch('/detalles-precios')
  @response(200, {
    description: 'DetallesPrecio PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetallesPrecio, {partial: true}),
        },
      },
    })
    detallesPrecio: DetallesPrecio,
    @param.where(DetallesPrecio) where?: Where<DetallesPrecio>,
  ): Promise<Count> {
    return this.detallesPrecioRepository.updateAll(detallesPrecio, where);
  }

  @get('/detalles-precios/{id}')
  @response(200, {
    description: 'DetallesPrecio model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DetallesPrecio, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DetallesPrecio, {exclude: 'where'}) filter?: FilterExcludingWhere<DetallesPrecio>
  ): Promise<DetallesPrecio> {
    return this.detallesPrecioRepository.findById(id, filter);
  }

  @patch('/detalles-precios/{id}')
  @response(204, {
    description: 'DetallesPrecio PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetallesPrecio, {partial: true}),
        },
      },
    })
    detallesPrecio: DetallesPrecio,
  ): Promise<void> {
    await this.detallesPrecioRepository.updateById(id, detallesPrecio);
  }

  @put('/detalles-precios/{id}')
  @response(204, {
    description: 'DetallesPrecio PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detallesPrecio: DetallesPrecio,
  ): Promise<void> {
    await this.detallesPrecioRepository.replaceById(id, detallesPrecio);
  }

  @del('/detalles-precios/{id}')
  @response(204, {
    description: 'DetallesPrecio DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detallesPrecioRepository.deleteById(id);
  }
}
