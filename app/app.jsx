import React from 'react'
import ReactDOM from 'react-dom'
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import firebase from 'app/firebase/'
import * as actions from 'actions'
import router from 'app/router/'
var store = require('configureStore').configure()

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(actions.login(user.uid))
    store.dispatch(actions.startAddTodos())
    hashHistory.push('/todos')
  }else{
    store.dispatch(actions.logout())
    hashHistory.push('/')
  }
})

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
