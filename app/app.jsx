import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import TodoApp from 'TodoApp'

const actions = require('actions')
var store = require('configureStore').configure()

store.subscribe(()=>{
  console.log('New state',store.getState())
})

store.dispatch(actions.addTodo('Clean the yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
 <TodoApp/>,
  document.getElementById('app')
);
