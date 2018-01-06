import React from 'react'

class AddTodo extends React.Component{
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        var newTodo = this.refs.todoText.value
        if(newTodo.length > 0){
			this.refs.todoText.value = '';
			this.props.onAddTodo(newTodo)
		}else{
            this.refs.todoText.focus()
        }
    }
    render(){
        return(
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="todoText" placeholder="What do you need to do"/>				
					<button className="button expanded">Add Todo</button>
				</form>
            </div>
        )
    }
}

module.exports = AddTodo;