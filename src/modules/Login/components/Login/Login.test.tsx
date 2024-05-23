import '@testing-library/jest-dom'
import 'cross-fetch/polyfill';
import { render, renderHook } from "@testing-library/react"
import { renderWithRouterAndRedux } from "../../../../helpers/testing/withRoutingAndRedux"
import { Login } from "./Login"

describe("test Login component",()=>{
    test("that all components exist",()=>{
        const {el,store} = renderWithRouterAndRedux(<></>,{user:{isAuth:false,name:""},table:[]},"/auth")
        const {getByText,getByTestId} = render(el)
        expect(getByTestId("loginForm")).toBeInTheDocument()
        const sendButton = getByText("send")
        expect(sendButton).toBeInTheDocument()
        expect(sendButton.className).toMatch("MuiButton-contained")
    })
})