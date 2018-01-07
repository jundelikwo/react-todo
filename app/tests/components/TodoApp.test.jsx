import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils'

import TodoApp from 'TodoApp'

describe('TodoApp',()=>{
    it('should exist',()=>{
        expect(TodoApp).toExist()
    })

    it('should add todo to the todo state on handleAddTodo',()=>{
        var todoText = 'Test Text'
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

        todoApp.setState({todos: []})
        todoApp.handleAddTodo(todoText)

        expect(todoApp.state.todos[0].text).toBe(todoText)
    })
})