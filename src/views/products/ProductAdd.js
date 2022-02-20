import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { productAdd} from '../../statemanagment/actions/productAction'



export const ProductAdd = () => {
    const dispatch=useDispatch();
    const id=useRef();
    const title=useRef();
    const price=useRef();

    const save = () => {
        let item = {}
        item.id = id.current.value;
        item.title = title.current.value;
        item.price = price.current.value;
        console.log(item)
        dispatch(productAdd(item))
    }

  return (
    <div>
          <h3>add New  Product</h3>
         <div>Id: <input ref={id}></input></div>
          <div>Title:<input ref={title}></input></div>
          <div>Price:<input ref={price}></input></div>
          <button onClick={()=>save()}>save </button>
    </div>
  )
}
