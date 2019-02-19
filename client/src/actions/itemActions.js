import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';


// @route   GET api/items
// @desc    get all items
export const getItems = () => dispath => {
    dispath(setItemsLoading());

    axios
        .get('/api/items')
        .then(res =>
            dispath({
                type: GET_ITEMS,
                payload: res.data
            })
        )
}; // getItems


// @route   POST api/items
// @desc    desccreate new Item
export const createItem = item => dispath => {
    axios
        .post('/api/items', item)
        .then(res =>
            dispath({
                type: CREATE_ITEM,
                payload: res.data
            })
        );
}; // createItem


// @route   DELETE api/items/${id}
// @desc    create new Item
export const deleteItem = id => dispath => {

    axios
        .delete(`/api/items/${id}`)
        .then(res =>
            dispath({
                type: DELETE_ITEM,
                payload: id
            })
        );
}; // deleteItem


// @func    LOADING
// @desc    change loading status
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
}; // deleteItem