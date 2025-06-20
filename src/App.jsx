import Header from './components/Header'
import Body from './components/Body'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'
import RestoMenu from './components/RestoMenu'
import Error from './components/Error'
// import Grocery from './components/Grocery'
import { lazy, useEffect, useState } from 'react'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appstore from './utils/appstore'
import Cart from './components/Cart'

const Grocery =lazy(()=>import('./components/Grocery')) 
function App() {
  
  // code for context
   const [userName,setuserName]=useState(null)
   useEffect(()=>{
    const data={
      name:"ankuu"
    }
    setuserName(data.name)
   },[])

  return (
    <Provider store={appstore}>
    <UserContext.Provider value={{loggedUser:userName,setuserName}}>
       <>
       <Header/>
       <Outlet/>
       </>
    </UserContext.Provider >
    </Provider>
  )
}
const appRouter=createBrowserRouter([
{
  
  element:<App/>,
  children:[{
    
      path:'/',
      element:<Body/>
    
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/restaurants/:id',
    element:<RestoMenu/>
  },
  {
    path:'/rest/:sex',
    element:<RestoMenu/>
  },
  {
    path:'/grocery',
    element:<Grocery/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
],
  errorElement:<Error/>
},

])

function root(){
    return <RouterProvider router={appRouter}/>
}
export default root


