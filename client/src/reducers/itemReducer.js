import uuid from 'uuid';
import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Some1' },
        { id: uuid(), name: 'Some2' },
        { id: uuid(), name: 'Some3' },
        { id: uuid(), name: 'Some4' }
    ]
};


export default function( state = initialState, action ) {

    switch( action.type ) {

        // @ GET all Items
        case GET_ITEMS:
            return {
                ...state
            }

        default:
            return state

    };
}