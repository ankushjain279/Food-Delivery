import React, { useState,useContext } from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux';
function Header() {

  const {loggedUser}=useContext(UserContext)
  // console.log(data)
  const onlinestatus = useOnlineStatus();
  let [toggle, settoggle] = useState("login");
  // subscribing to the store
  const cartdata=useSelector((store)=>store.cart.items)
  console.log(cartdata);

  
  return (
    <div className='flex justify-between items-center px-12 py-4 shadow-md bg-white'>
      
      {/* Logo Section */}
      <div>
        <img src={LOGO_URL} alt="loading..." className='h-20 w-auto rounded-xl' />
      </div>

      {/* Navigation Section */}
      <div>
        <ul className='flex gap-8 items-center font-medium text-lg'>
          <li className='hover:text-blue-500'>Online Status: {onlinestatus ? "✅" : "🔴"}</li>
          <li className='hover:text-blue-500'><Link to="/">Home</Link></li>
          <li className='hover:text-blue-500'><Link to="/about">About us</Link></li>
          <li className='hover:text-blue-500'><Link to="/contact">Contact Us</Link></li>
          <li className='hover:text-blue-500'><Link to="/grocery">Grocery</Link></li>
          <li className='hover:text-blue-500'><Link to="/cart">Cart({cartdata.length})</Link></li>
          <li className='hover:text-blue-500'>{loggedUser}</li>
          <li>
            <button
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition'
              onClick={() => {
                toggle === "login" ? settoggle("logout") : settoggle("login")
              }}
            >
              {toggle}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
