import React from 'react'
import uuid from 'node-uuid'
import moment from 'moment'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import TodoAPI from 'TodoAPI'

class TodoApp extends React.Component{
    constructor(){
        super();
        this.state={
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos)
    }
    handleAddTodo(text){
        var {todos} = this.state;
        this.setState({
            todos: [
                ...todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
                }
            ]
        })
    }
    handleSearch(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    }
    render(){
        var {todos, showCompleted, searchText} = this.state;
        var filteredtodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
        return(
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = TodoApp;