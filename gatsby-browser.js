
import React from 'react'
import GlobalContextProvider from './src/context/GlobalContextProvider'


export const wrapRootElement = ({ element }) => {
    return (
      // <Provider store={store}>
      <GlobalContextProvider>
          {element}
      </GlobalContextProvider>
      // </Provider>
    )
  }