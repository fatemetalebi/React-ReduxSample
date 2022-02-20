import {PRODUCT_ADD,PRODUCT_DELETE,PRODUCT_GET_ALL} from './actionTypes';

export const productAdd=(item)=>({
    type: PRODUCT_ADD,
    payload:item
})

export const productDelete=(id)=>({
    type:PRODUCT_DELETE,
    payload:id

})

export const productGetAll=()=>({
    type:PRODUCT_GET_ALL
})