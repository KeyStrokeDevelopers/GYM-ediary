import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/home'
import Login from './Components/login'
import SignUp from './Components/signUp'
import ForgotPassword from './Components/forgotPassword'
import Registration from './Components/registration'
import Enquiry from './Components/enquiry'
import store from './Store'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route path='/registration' component={Registration} />
          <Route path='/enquiry' component={Enquiry} />
        </Router>
      </Provider>
    )
  }
}

export default App;
