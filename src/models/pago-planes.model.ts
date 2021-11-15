import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Mascota} from './mascota.model';
import {Plan} from './plan.model';

@model()
export class PagoPlanes extends Entity {
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

  @property({
    type: 'date',
    required: true,
  })
  fechaPago: string;

  @property({
    type: 'string',
    required: true,
  })
  formaspago: string;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;

  @belongsTo(() => Mascota)
  mascotaId: number;

  @belongsTo(() => Plan)
  planId: number;

  constructor(data?: Partial<PagoPlanes>) {
    super(data);
  }
}

export interface PagoPlanesRelations {
  // describe navigational properties here
}

export type PagoPlanesWithRelations = PagoPlanes & PagoPlanesRelations;
