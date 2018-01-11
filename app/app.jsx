import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import TodoApp from 'TodoApp'
import TodoAPI from 'TodoAPI'

const actions = require('actions')
var store = require('configureStore').configure()

store.subscribe(()=>{
  var state = store.getState()

  console.log('New state',state)

  TodoAPI.setTodos(state.todos)
})

var initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

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
