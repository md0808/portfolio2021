const React = require("react")
// const { Provider } = require("react-redux")
const GlobalContextProvider = require('./src/context/GlobalContextProvider')

const createStore = require("./src/state/createStore")
// const store = createStore()

exports.wrapRootElement = ({ element }) => {
  return (
    // <Provider store={store}>
    <GlobalContextProvider>
        {element}
    </GlobalContextProvider>
    // </Provider>
  )
}