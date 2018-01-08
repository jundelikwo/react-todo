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
        expect(todoApp.state.todos[0].createdAt).toBeA('number')
    })

    it('should toggle completed value when handleToggle called',()=>{
        var todoData = {
            id: 11,
            text: 'Test feature',
            completed: false,
            createdAt: 0,
            completedAt: null
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
        todoApp.setState({todos: [todoData]})

        expect(todoApp.state.todos[0].completed).toBe(false)
        todoApp.handleToggle(11)
        expect(todoApp.state.todos[0].completed).toBe(true)
        expect(todoApp.state.todos[0].completedAt).toBeA('number')
    })

    it('should toggle todo from completed to incompleted',()=>{
        var todoData = {
            id: 11,
            text: 'Test feature',
            completed: true,
            createdAt: 0,
            completedAt: 123
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
        todoApp.setState({todos: [todoData]})

        expect(todoApp.state.todos[0].completed).toBe(true)
        todoApp.handleToggle(11)
        expect(todoApp.state.todos[0].completed).toBe(false)
        expect(todoApp.state.todos[0].completedAt).toNotExist()
    })
})