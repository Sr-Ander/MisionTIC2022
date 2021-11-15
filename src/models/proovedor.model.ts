import {Entity, model, property} from '@loopback/repository';

@model()
export class Proovedor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  contacto: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono1: number;

  @property({
    type: 'number',
    required: true,
  })
  telefono2: number;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;


  constructor(data?: Partial<Proovedor>) {
    super(data);
  }
}

export interface ProovedorRelations {
  // describe navigational properties here
}

export type ProovedorWithRelations = Proovedor & ProovedorRelations;
