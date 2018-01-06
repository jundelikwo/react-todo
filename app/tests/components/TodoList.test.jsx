import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils'

import TodoList from 'TodoList'
import Todo from 'Todo'

describe('TodoList',()=>{
    it('should exist',()=>{
        expect(TodoList).toExist()
    })

    it('should render one Todo component for each todo item',()=>{
        var todos = [{
            id: 1,
            text: 'Do something'
        },{
            id: 2,
            text: 'Check mail'
        }]

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
        var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList,Todo)

        expect(todosComponent.length).toBe(todos.length)
    })
})