import {combineReducers} from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'

const rootRecuder=combineReducers({
    changeCategoryReducer,
    categoryListReducer
})

export default rootRecuder