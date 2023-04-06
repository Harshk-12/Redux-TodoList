import React from 'react'
import App from './Store/Store/App'
import Todo from './Reduxfiles/Todo'
import { Provider } from 'react-redux'

function Mainrender() {
  return (
    <>
      <Provider store={App}>

        <Todo />

      </Provider>



    </>
  )
}

export default Mainrender