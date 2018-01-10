import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import {Provider} from 'react-redux'
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils'

import {configure} from 'configureStore'
import ConnectedTodoList, {TodoList} from 'TodoLIst'
import ConnectedTodo, {Todo} from 'Todo'

describe('TodoList',()=>{
    it('should exist',()=>{
        expect(TodoList).toExist()
    })

    it('should render one Todo component for each todo item',()=>{
        var todos = [{
            id: 1,
            text: 'Do something',
            completed: false,
            completedAt: null,
            createdAt: 500
        },{
            id: 2,
            text: 'Check mail',
            completed: false,
            completedAt: null,
            createdAt: 500
        }]

        var store = configure({
            todos
        })

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        )
        var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0]
        var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo)

        expect(todosComponent.length).toBe(todos.length)
    })
    
    it('should render empty message if no todos',()=>{
        var todos = []

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1)
    })
})