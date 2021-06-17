import db from '../ConnectFirebase'
import * as CarrosAction from './carrosAction'

const colletion = "carros"

export const SET_CARRO_DATA = "SET_CARRO_DATA"
export const CLEAR_CARRO_DATA = "CLEAR_CARRO_DATA"


export const get = (id) => async (dispatch, getState) => {
    try {
        let dados = await db.collection(colletion).doc(id).get()
        let objeto = Object.assign({}, dados.data(), { id: dados.id })
        return dispatch({
            type: SET_CARRO_DATA,
            payload: objeto
        })
    } catch (error) {
        throw error.message
    }
}

export const clear = () => async (dispatch, getState) => {
    return dispatch({
        type: CLEAR_CARRO_DATA,
    })
}

export const save = (param) => async (dispatch, getState) => {
    try {
        let id = param.id
        delete param.id

        if (id) {
            await db.collection(colletion).doc(id).update(param)
        } else {
            await db.collection(colletion).add(param)
        }
        return dispatch(CarrosAction.getList())
    } catch (error) {
        throw error.message
    }
}

export const remove = (id) => async (dispatch, getState) => {
    try {
        await db.collection(colletion).doc(id).delete()
        return dispatch(CarrosAction.getList())
    } catch (error) {
        throw error.message
    }
}