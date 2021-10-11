import { createAction, props } from "@ngrx/store";


export const incrementarActions = createAction('[Contador] Incrementar');
export const decrementarActions = createAction('[Contador] Decrementar');

export const multiplicarActions = createAction(
    '[Contador] Multiplicar', props<{ numero: number }>()
);

export const dividirActions = createAction(
    '[Contador] Dividir', props<{ numero: number }>()
);
