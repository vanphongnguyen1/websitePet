import React from 'react'
import PetShop from './components'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PetShop />
      </Provider>
    </>
  )
}

export default App;
