import expect from 'expect'
import df from 'deep-freeze-strict'

const reducers = require('reducers')

describe('Reducers',()=>{
    it('should exist',()=>{
        expect(reducers).toExist()
    })

    describe('searchTextReducer',()=>{
        it('should set searchText',()=>{
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Dog'
            }
            var res = reducers.searchTextReducer(df(''),df(action))

            expect(res).toEqual(action.searchText)
        })
    })

    describe('showCompletedReducer',()=>{
        it('should toggle showCompleted',()=>{
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducers.showCompletedReducer(df(false),df(action))

            expect(res).toEqual(true)
        })
    })

    describe('todosReducer',()=>{
        it('should add new todo',()=>{
            var action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            }
            var res = reducers.todosReducer(df([]),df(action))

            expect(res.length).toBe(1)
            expect(res[0].text).toEqual(action.text)
        })

        it('should toggle todo',()=>{
            var todo = [{
                id: 11,
                text: 'Test feature',
                completed: false,
                createdAt: 0,
                completedAt: null
            }]
            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            }
            var res = reducers.todosReducer(df(todo),df(action))

            expect(res[0].completed).toExist()
            expect(res[0].completedAt).toExist()
        })

        it('should add existing todos',()=>{
            var todos = [{
                id: 111,
                text: 'anything',
                completed: false,
                completedAt: null,
                createdAt: 33000
            }]
            var action = {
                type: 'ADD_TODOS',
                todos
            }
            var res = reducers.todosReducer(df([]), df(action))

            expect(res.length).toEqual(1)
            expect(res[0]).toEqual(todos[0])
        })
    })
})