import React from 'react'
import {connect} from 'react-redux'
import Todo from 'Todo'
import TodoAPI from 'TodoAPI'

export class TodoList extends React.Component{
    render(){
        var {todos, showCompleted, searchText} = this.props;

        var renderTodos = ()=>{
            var filteredTodos =  TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
                return(
                    <Todo key={todo.id} {...todo}/>
                )
            })

            if(filteredTodos.length === 0){
                return <p className="container__message">Nothing To Do</p>
            }else{
                return filteredTodos
            }
        }
        return(
            <div>
                {renderTodos()}
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return state
    }
)(TodoList)