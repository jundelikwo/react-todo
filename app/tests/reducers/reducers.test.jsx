import expect from 'expect'
import df from 'deep-freeze-strict'

const reducers = require('reducers')

describe('Reducers',()=>{
    it('should exist',()=>{
        expect(reducers).toExist()
    })

    describe('authReducer',()=>{
        it('should set uid on login',()=>{
            var action = {
                type: 'LOGIN',
                uid: '123abc'
            }
            var res = reducers.authReducer(df({}),df(action))

            expect(res).toEqual({
                uid: action.uid
            })
        })

        it('should unset uid on logout',()=>{
            var action = {
                type: 'LOGOUT'
            }
            var authData = {
                uid: '123abc'
            }
            var res = reducers.authReducer(df(authData),df(action))

            expect(res).toEqual({})
        })
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
                todo: {
                    id: 'abc123',
                    text: 'Walk the dog',
                    completed: false,
                    createdAt: 10299
                }
            }
            var res = reducers.todosReducer(df([]),df(action))

            expect(res.length).toBe(1)
            expect(res[0]).toEqual(action.todo)
        })

        it('should update todo',()=>{
            var todo = [{
                id: 11,
                text: 'Test feature',
                completed: true,
                createdAt: 10,
                completedAt: 125
            }]
            var updates = {
                completed: false,
                completedAt: null
            }
            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            }
            var res = reducers.todosReducer(df(todo),df(action))

            expect(res[0].completed).toEqual(updates.completed)
            expect(res[0].completedAt).toEqual(updates.completedAt)
            expect(res[0].text).toEqual(todos[0].text)
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