import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils'

import AddTodo from 'AddTodo'

describe('AddTodo',()=>{
    it('should exist',()=>{
        expect(AddTodo).toExist()
    })

    it('should call onAddTodo if valid todoText entered',()=>{
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addTodo))

        addTodo.refs.todoText.value = 'New Todo';
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toHaveBeenCalledWith('New Todo');
    })

    it('should not call onAddTodo if invalid todoText entered',()=>{
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addTodo))

        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0])

        expect(spy).toNotHaveBeenCalled();
    })
})