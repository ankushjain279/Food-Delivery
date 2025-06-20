import React from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import { clearcart } from '../utils/cartSlice'
import ItemList from './ItemList'
function Cart() {
  const dispatch=useDispatch()
   
  const handleCartClear=()=>{
    dispatch(clearcart())
  }
  const Cartitem=useSelector((store)=>store.cart.items)

  console.log("apni cart",Cartitem);

  return  Cartitem.length===0?
  <h1 className='text-center m-2 font-bold text-2xl '>item add kar chutiye</h1> 
  :(
    <div>
      <h1 className='font-bold text-center underline py-2'>Cart</h1>
      
      <div className='flex justify-center'>
        <button onClick={()=>handleCartClear()}
        className='cursor-pointer bg-black text-white text-xl p-1 rounded-lg'>
          Clear-Cart
        </button>
      </div>
      <div className='w-[60%] mx-auto bg-pink-50 my-4 rounded-xl'>
      <ItemList list={Cartitem} />
      </div>
    
    </div>
  )
}

export default Cart
