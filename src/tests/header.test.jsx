import { fireEvent, render,screen } from "@testing-library/react"
import Header from '../components/Header'
import { Provider } from "react-redux"
import appstore from '../utils/appstore'
import {BrowserRouter} from "react-router-dom"
test("should be any button on header section",()=>{
    // could not find react-redux context value; please ensure the component is wrapped in a <Provider>
    //it should dont understand redux so we have to wrap this using provider
    // again we got an error because it doesnt understand Link it is a part of react router dom
    // so we have to wrap this inside BrowserRouter
    render(
    <BrowserRouter >
    <Provider store={appstore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    const button = screen.getByRole('button',{name:'login'})
    expect(button).toBeInTheDocument()
})
test("should have cart with zero items",()=>{
    render(
    <BrowserRouter >
    <Provider store={appstore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    const Cart = screen.getByText('Cart(0)')
    expect(Cart).toBeInTheDocument()
})
it("should change login button to logout on click",()=>{
    render(
    <BrowserRouter >
    <Provider store={appstore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginbtn = screen.getByRole('button',{name:'login'})
    fireEvent.click(loginbtn)
    const logoutbtn = screen.getByRole('button',{name:'logout'})
    expect(logoutbtn).toBeInTheDocument()
})