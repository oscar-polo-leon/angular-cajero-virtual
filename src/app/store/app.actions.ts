// 1 - Importaciones
import { Action } from '@ngrx/store'

// 2 - Definición del tipo de acción
export const ADD_TASK = 'Add task'

// 3 - Creación de la clase tipo AddTask
export class AddTask implements Action {
  readonly type = ADD_TASK
  constructor() { }
}

// 4 - Exportación de la acción
export type Actions = AddTask
