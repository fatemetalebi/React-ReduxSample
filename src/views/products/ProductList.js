import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { productDelete} from '../../statemanagment/actions/productAction'

export const ProductList = () => {

    const products = useSelector(store => store.productState)
    const dispatch=useDispatch();
  return (
    <div>
          <h3>ProductList</h3>
            <ul>
                {products.map(item=>
                    <li key={item.id}>{item.title}-{item.price}-<button onClick={()=>
                        dispatch(productDelete(item.id ))}>Dlete</button></li>

                    )}
            </ul>


    </div>

  )
}
