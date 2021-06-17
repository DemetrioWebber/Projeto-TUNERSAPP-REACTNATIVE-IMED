import * as Actions from '../actions'

const initialState = []

const carros = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_CARROS_DATA:
            {
                return [
                    ...initialState,
                    ...action.payload
                ]
            }
        default:
            {
                return state
            }

    }
}
export default carros;