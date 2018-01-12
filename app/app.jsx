import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import TodoApp from 'TodoApp'
import TodoAPI from 'TodoAPI'

const actions = require('actions')
var store = require('configureStore').configure()

store.dispatch(actions.startAddTodos())

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
