const initialState = {
    device: ['Màn hình', 'Bàn Phím', 'Chuột']
}

export default function reducerDevice(state = initialState, { type, payload }) {
    switch (type) {
        case "ADD":
            return { ...state, device: [...state.device, payload] }

        case "DELETE":
            // const kq = state.device.filter((value, i) => i != payload)
            // return { ...state, device: kq }

            return { ...state, device: state.device.filter((value, i) => i != payload) }

        default:
            return state
    }
}