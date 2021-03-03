import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from '../actions/toDoListActions'

export const initialState = {
    list: ["Make a todo list of all my todo lists", "Make a playlist for every possible occasion", "Stop checking phone compulsively"],
}

const toDoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                list: [...state.list, action.payload]
            }
        case REMOVE_ITEM:
            let newListArray = state.list.filter((item, index) => index !== action.payload)
            
            return {
                list: newListArray
            }
        case UPDATE_ITEM:
            let { index, updatedText } = action.payload
            let newListArrayWithUpdatedItem = [...state.list]
            newListArrayWithUpdatedItem[index] = updatedText

            return {
                list: newListArrayWithUpdatedItem
            }
        default:
            return state
    }
}

export default toDoListReducer;