import defaultState from "./state"
import handleAction from './action'
import {createStore} from 'redux'

function handler(state=defaultState,action){ return handleAction(state,action) }

let store=createStore(handler)

export default store
