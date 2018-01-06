import React from 'react'
import TodoList from 'TodoList'

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
    }
    render(){
        var {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
}

module.exports = TodoApp;