import { createReducer, on } from '@ngrx/store';
import { crearAction, toggleCompletadoAction } from './nota.actions';
import { NotaClass } from '../models/nota.model';

export const initialState: NotaClass[] = [new NotaClass('primera data')];

const _notaReducer = createReducer(
    initialState,
    on(crearAction, (state, props) => /* state.push(props.texto) */[...state, new NotaClass(props.texto)]),
    on(toggleCompletadoAction, (state, { id }) => {
        return state.map(nota => {
            if (nota.id === id) {
                return {
                    ...nota,
                    completado: !nota.completado
                }
            } else {
                return nota;
            }
        })
    }),
);

export function notaReducer(state: any, action: any) {
    return _notaReducer(state, action);
}