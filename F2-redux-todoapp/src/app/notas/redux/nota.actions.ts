import { createAction, props } from "@ngrx/store";

export const crearAction = createAction('[TODO] crearNota', props<{ texto: string }>());
export const toggleCompletadoAction = createAction('[TODO] toggleNota', props<{ id: number }>());
export const editarAction = createAction('[TODO] editarNota', props<{ id: number, texto: string }>());
