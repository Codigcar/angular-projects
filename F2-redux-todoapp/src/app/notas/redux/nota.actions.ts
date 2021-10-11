import { createAction, props } from "@ngrx/store";

export const crearAction = createAction('[Counter Component] Increment', props<{ texto: string }>());
