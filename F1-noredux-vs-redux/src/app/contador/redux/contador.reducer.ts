import { Action } from "@ngrx/store";
import { decrementarActions, incrementarActions } from "./contador.action";



export function contadorReducer(state: number = 10, action: Action) {

    switch (action.type) {
        case incrementarActions.type:
            return state + 1;

        case decrementarActions.type:
            return state - 1;

        default:
            return state;
    }

}