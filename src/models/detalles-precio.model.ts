import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Pedido} from './pedido.model';
import {Producto} from './producto.model';

@model()
export class DetallesPrecio extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
    id?: number;
  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @belongsTo(() => Pedido)
  pedidoId: number;

  @belongsTo(() => Producto)
  productoId: number;

  constructor(data?: Partial<DetallesPrecio>) {
    super(data);
  }
}

export interface DetallesPrecioRelations {
  // describe navigational properties here
}

export type DetallesPrecioWithRelations = DetallesPrecio & DetallesPrecioRelations;
