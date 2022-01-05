//definir a interface da proporiedade do componente a ser utilizado

import { createAction, createReducer, on } from "@ngrx/store"

export interface IAppState{
    counter: number;
}

// defino qual estado inicial do mesmo

export const appInitialState: IAppState = {
    counter: 1
}


export const incrementaContador = createAction('[App] Aumenta Contador');
export const decrementaContador = createAction('[App] Reduz Contador');


// Diz qual é o estado inicial da aplicação
export const appReducer = createReducer(
    appInitialState,
    on(incrementaContador,(state) => {
        state = {
            ...state,
            counter: state.counter + 1
        }
        return state;
    }),
    on(decrementaContador,(state) => {
        state = {
            ...state,
            counter: state.counter - 1
        }
        return state;
    })
)

