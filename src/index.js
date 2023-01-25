import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Retry from './views/retry'
import Page1 from './views/page1'
import Home from './views/home'
import Page3 from './views/page3'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Retry} exact path="/retry" />
        <Route component={Page1} exact path="/page1" />
        <Route component={Home} exact path="/" />
        <Route component={Page3} exact path="/page3" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
