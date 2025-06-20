import {configureStore} from '@reduxjs/toolkit'
// Jo bhi default export hai cartSlice.js se, usko cartReducer naam se import karo.
import cartReducer  from './cartSlice'

//make a redux store (step 1)
const appstore=configureStore({
    // each slice has its own reducer so this is a big reducer for the whole app
    reducer :{
        cart:cartReducer
    }
})

export default appstore