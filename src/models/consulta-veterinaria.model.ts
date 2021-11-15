import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Proovedor} from './proovedor.model';
import {Mascota} from './mascota.model';

@model()
export class ConsultaVeterinaria extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaSolicitud: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaConsulta: string;

  @property({
    type: 'boolean',
    required: true,
  })
  pagado: boolean;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;

  @belongsTo(() => Proovedor)
  proovedorId: string;

  @belongsTo(() => Mascota)
  mascotaId: number;

  constructor(data?: Partial<ConsultaVeterinaria>) {
    super(data);
  }
}

export interface ConsultaVeterinariaRelations {
  // describe navigational properties here
}

export type ConsultaVeterinariaWithRelations = ConsultaVeterinaria & ConsultaVeterinariaRelations;
