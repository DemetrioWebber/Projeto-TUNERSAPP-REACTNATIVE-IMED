import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import login from './reducers/loginReducer'
import carro from './reducers/carroReducer'
import carros from './reducers/carrosReducer'
import tuners from './reducers/tunersReducer'
const rootReducer = combineReducers({
    login, carro, carros, tuners
})

//Desenvolvimento
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


//Produção
//const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
