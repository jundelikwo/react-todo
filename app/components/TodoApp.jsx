import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

class TodoApp extends React.Component{
    constructor(){
        super();
        this.state={
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
    }
    handleAddTodo(text){
        alert('new todo: '+text)
    }
    render(){
        var {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}

module.exports = TodoApp;