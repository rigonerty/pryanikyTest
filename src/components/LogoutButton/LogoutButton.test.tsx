import '@testing-library/jest-dom'
import { LogoutButton } from "./LogoutButton"
import userEvent from '@testing-library/user-event'
import {withRedux} from "../../helpers/testing/withRedux"
import { setUser } from "../../store/slices/user/user"
import {render} from "@testing-library/react"

describe("test LogoutButton Component",()=>{
    test("button component is exist",()=>{
        const {el} = withRedux(<LogoutButton/>, {user:{isAuth:false,name:""}})
        const {getByText}= render(el)
        const button = getByText("Logout")
        expect(button).toBeInTheDocument();
        expect(button.className).toMatch("MuiButton-colorError")
        expect(button.className).toMatch("MuiButton-contained")
    })
    test("logout functions",async ()=>{
        const {el,store} = withRedux(<LogoutButton/>, {user:{isAuth:false,name:""}})
        const {getByText}= render(el)
        store.dispatch(setUser({name:"user22"}))
        localStorage.setItem("token","superdupersecrettoken")
        expect(store.getState().user.isAuth).toBe(true)
        const button = getByText("Logout")
        await userEvent.click(button)
        expect(store.getState().user.isAuth).toBe(false)
        expect(localStorage.getItem("token")).toBe(null)
    })
})