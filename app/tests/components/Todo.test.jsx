import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils'

import * as actions from 'actions'
import {Todo} from 'Todo'

describe('Todo',()=>{
    it('should exist',()=>{
        expect(Todo).toExist()
    })

    it('should dispatch TOGGLE_TODO action on click',()=>{
        var todoData = {
            id: 199,
            text: 'Write todo.test.jsx test',
            completed: true
        }
        var action = actions.startToggleTodo(todoData.id, !todoData.completed)

        var spy = expect.createSpy()
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(todo))

        TestUtils.Simulate.click($el[0])
        expect(spy).toHaveBeenCalledWith(action)
    })
})