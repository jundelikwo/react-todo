import React from 'react'
import uuid from 'node-uuid'

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
        this.handleToggle = this.handleToggle.bind(this)
    }
    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos)
    }
    handleToggle(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        })

        this.setState({
            todos: updatedTodos
        })
    }
    handleAddTodo(text){
        var {todos} = this.state;
        this.setState({
            todos: [
                ...todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
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
        var {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}

module.exports = TodoApp;