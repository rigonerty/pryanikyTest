import React from 'react'
import { RootState, setupStore } from '../../store'
import { Provider } from 'react-redux'

export const withRedux = (el:React.ReactElement, options:Partial<RootState>) => {
    const store = setupStore(options)
    return {
        el:(<Provider store={store}>
            {el}
        </Provider>),
        store

    }

}
