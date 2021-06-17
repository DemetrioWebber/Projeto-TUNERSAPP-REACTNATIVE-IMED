import db from '../ConnectFirebase'
const colletion = "carros"
export const SET_CARROS_DATA = 'SET_CARROS_DATA'

export const getList = () => async (dispatch, getState) => {
    try {
        let dados = await db.collection(colletion).get()
        let lista = []
        dados.forEach(item => {
            let objeto = Object.assign({}, item.data(), { id: item.id })
            lista.push(objeto)
        })
        return dispatch({
            type: SET_CARROS_DATA,
            payload: lista
        })
    } catch (error) {
        throw error.message
    }


}
