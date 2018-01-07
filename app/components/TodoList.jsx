import React from 'react'
import Todo from 'Todo'

class TodoList extends React.Component{
    render(){
        var {todos} = this.props;

        var renderTodos = ()=>{
            return todos.map((todo)=>{
                return(
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                )
            })
        }
        return(
            <div>
                {renderTodos()}
            </div>
        )
    }
}

module.exports = TodoList