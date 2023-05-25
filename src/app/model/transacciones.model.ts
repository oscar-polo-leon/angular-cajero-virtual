export interface Respuesta{
  response: boolean;
  data : Data;
}

export interface Data{
  transaciones : Transacciones[];
  monto : string;
}

export interface Transacciones
{
  fecha : string;
  monto : string;
}
