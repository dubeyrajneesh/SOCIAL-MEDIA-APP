import {createStore , combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {UserReducer} from '../Reducer/UserReducer';

const reducers = combineReducers({

    UserReducer : UserReducer
})

const middleware= [thunk] ;


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store ;