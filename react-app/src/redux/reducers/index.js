import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Combining all the reducers
const rootReducers = combineReducers({
    form: formReducer
})

export default rootReducers