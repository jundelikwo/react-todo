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
})