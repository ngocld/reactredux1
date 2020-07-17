import reducerEdit from '../reducer/edit'
import reducerDevice from '../reducer/device'

var redux = require('redux')


var allReducer = redux.combineReducers({
    edit: reducerEdit,
    device: reducerDevice
})

var store1 = redux.createStore(allReducer)

console.log(JSON.stringify(store1.getState()))

store1.subscribe(
    () => {
        console.log(JSON.stringify(store1.getState()))
    }
)

export default store1