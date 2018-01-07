import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

class TodoApp extends React.Component{
    constructor(){
        super();
        this.state={
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Sweep the room'
                },
                {
                    id: 4,
                    text: 'Wash the car'
                }
            ]
        }
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleAddTodo(text){
        alert('new todo: '+text)
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
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}

module.exports = TodoApp;