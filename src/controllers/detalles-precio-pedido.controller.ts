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
  Pedido,
} from '../models';
import {DetallesPrecioRepository} from '../repositories';

export class DetallesPrecioPedidoController {
  constructor(
    @repository(DetallesPrecioRepository)
    public detallesPrecioRepository: DetallesPrecioRepository,
  ) { }

  @get('/detalles-precios/{id}/pedido', {
    responses: {
      '200': {
        description: 'Pedido belonging to DetallesPrecio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pedido)},
          },
        },
      },
    },
  })
  async getPedido(
    @param.path.number('id') id: typeof DetallesPrecio.prototype.id,
  ): Promise<Pedido> {
    return this.detallesPrecioRepository.pedido(id);
  }
}
