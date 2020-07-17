const initialState = {
    edit: true
}

export default function reducerEdit(state = initialState, { type }) {
    switch (type) {

        case "CHANGE":
            return { ...state, edit: !state.edit }

        default:
            return state
    }
}