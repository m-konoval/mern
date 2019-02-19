import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [],
    loading: false
};


export default function (state = initialState, action) {

    switch (action.type) {

        // @ GET all Items
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        case CREATE_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state

    };
}