import React from 'react'
import {connect} from 'react-redux'

const actions = require('actions')

export class AddTodo extends React.Component{
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props
        var newTodo = this.refs.todoText.value
        if(newTodo.length > 0){
			this.refs.todoText.value = '';
			dispatch(actions.startAddTodo(newTodo))
		}else{
            this.refs.todoText.focus()
        }
    }
    render(){
        return(
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="todoText" placeholder="What do you need to do"/>				
					<button className="button expanded">Add Todo</button>
				</form>
            </div>
        )
    }
}

export default connect()(AddTodo)