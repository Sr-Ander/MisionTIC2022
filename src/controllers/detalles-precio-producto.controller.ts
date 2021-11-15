import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  DetallesPrecio,
  Producto,
} from '../models';
import {DetallesPrecioRepository} from '../repositories';

export class DetallesPrecioProductoController {
  constructor(
    @repository(DetallesPrecioRepository)
    public detallesPrecioRepository: DetallesPrecioRepository,
  ) { }

  @get('/detalles-precios/{id}/producto', {
    responses: {
      '200': {
        description: 'Producto belonging to DetallesPrecio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Producto)},
          },
        },
      },
    },
  })
  async getProducto(
    @param.path.number('id') id: typeof DetallesPrecio.prototype.id,
  ): Promise<Producto> {
    return this.detallesPrecioRepository.producto(id);
  }
}
