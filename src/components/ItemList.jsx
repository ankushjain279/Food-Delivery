import React from 'react'
import { RESTRO_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { additem } from '../utils/cartSlice'
function ItemList({ list }) {

  const dispatch=useDispatch()
  const handleclick=(e)=>{
   dispatch(additem(e))

  }
  // destructing it to handle the redux data also
  const items = list?.itemCards || list; 
  return (
    <div className="space-y-6 px-4 py-4">
      {
        items.map((e) => {
          return (
            <div
              key={e?.card?.info?.id}
              className="flex justify-between items-start border-b pb-6 gap-6"
            >
              {/* Text Section */}
              <div className="w-4/5">
                <h1 className="font-semibold text-lg text-gray-800 mb-1">
                  {e?.card?.info?.name} – ₹
                  {e?.card?.info?.defaultPrice
                    ? e?.card?.info?.defaultPrice / 100
                    : e?.card?.info?.price / 100}
                </h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {e?.card?.info?.description}
                </p>
              </div>

              {/* Image + Button */}
              <div className="w-1/5 relative h-24 flex flex-col items-center justify-end">
              <button onClick={()=>handleclick(e)}
               className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200 absolute cursor-pointer">
                  Add +
                </button>
                <img
                  className="h-20 w-full object-cover rounded-md shadow-md mb-2"
                  src={RESTRO_URL + e?.card?.info?.imageId}
                  alt=""
                />
                
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemList
