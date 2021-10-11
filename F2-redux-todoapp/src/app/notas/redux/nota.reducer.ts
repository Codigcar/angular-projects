import { createReducer, on } from '@ngrx/store';
import { crearAction } from './nota.actions';
import { NotaClass } from '../models/nota.model';

export const initialState: NotaClass[] = [];

const _notaReducer = createReducer(
    initialState,
    on(crearAction, (state, props) => /* state.push(props.texto) */[...state, new NotaClass(props.texto)]),
);

export function notaReducer(state: any, action: any) {
    return _notaReducer(state, action);
}