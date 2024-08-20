import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}
export const contadorSlice = createSlice({
    name: 'contador',
    initialState,
    reducers: {
        zerar: state => {
            state.value = 0
        },
        incrementar: state => {
            state.value += 1
        },
        decrementar: state => {
            state.value -= 1
        },
        incrementarPorQtd: (state, action) => {
            state.value += action.payload
        },
        decrementarPorQtd: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const {zerar, incrementar, decrementar, incrementarPorQtd, decrementarPorQtd} = contadorSlice.actions
export default contadorSlice.reducer
