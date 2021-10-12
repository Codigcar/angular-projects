import { createAction, props } from "@ngrx/store";

export const crearAction = createAction('[TODO] crearNota', props<{ texto: string }>());
export const toggleCompletadoAction = createAction('[TODO] toggleNota', props<{ id: number }>());
