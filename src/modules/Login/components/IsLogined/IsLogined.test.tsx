import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { IsLogined } from "./IsLogined"
import { withRedux } from "../../../../helpers/testing/withRedux"



describe("test IsLogined component",()=>{
    test("IsLogined component exist",()=>{
        const {el} = withRedux(<IsLogined/>,{user:{isAuth:true,name:"user22"}})
        const {getByText} = render(el)
        const text = getByText("You already logged!")
        expect(text).toBeInTheDocument();
        expect(text.className).toMatch("MuiTypography-h2")
    })
})