import { configureStore } from "@reduxjs/toolkit"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../router/AppRouter"
import { setupStore } from "../../store"
import { RootState } from "../../store"

export const renderWithRouterAndRedux = (el:React.ReactElement, options:Partial<RootState>,route?:string)=>{
    const store = setupStore(options)
    return {

        el:(<Provider store={store}>
            <MemoryRouter initialEntries={[route||"/"]}>
                <AppRouter/>
                {el}
            </MemoryRouter>
        </Provider>),
        store
    }
}