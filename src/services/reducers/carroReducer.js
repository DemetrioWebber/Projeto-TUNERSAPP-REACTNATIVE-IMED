import * as Actions from '../actions'

const initialState = {}

const carro = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_CARRO_DATA:
            {
                return {
                    ...action.payload
                }
            }
        case Actions.CLEAR_CARRO_DATA:
            {
                return {}
            }
        default:
            {
                return state
            }
    }
}

export default carro;