import React from 'react'
import Badge from './redux/Badge'
import Card from './redux/Card'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Badge/>
      <Card/>
      </Provider>
      
    </div>
  )
}

export default App
