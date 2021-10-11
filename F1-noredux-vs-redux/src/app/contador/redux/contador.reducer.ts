import { Action, createReducer, on } from "@ngrx/store";
import { decrementarActions, incrementarActions, multiplicarActions, dividirActions } from './contador.action';



// export function contadorReducer(state: number = 10, action: Action) {

//     switch (action.type) {
//         case incrementarActions.type:
//             return state + 1;

//         case decrementarActions.type:
//             return state - 1;

//         default:
//             return state;
//     }

// }



// -------PROPIO DE NGRX, es más sencillo crear el contadorReducer
export const initialState = 100;

const _counterReducer = createReducer(
    initialState,
    on(incrementarActions, (state) => state + 1),
    on(decrementarActions, (state) => state - 1),
    // on(reset, (state) => 0)
    on(multiplicarActions, (state, props) => state * props.numero),
    on(dividirActions, (state, props) => state / props.numero),
    
);

export function contadorReducer(state: any, action: Action) {
    return _counterReducer(state, action);
}