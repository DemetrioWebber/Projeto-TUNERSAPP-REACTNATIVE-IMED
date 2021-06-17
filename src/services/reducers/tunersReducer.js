import * as Actions from '../actions'

const initialState = []

const tuners = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_TUNERS_DATA:
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
export default tuners;