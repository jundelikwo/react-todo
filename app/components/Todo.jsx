import React from 'react'
import moment from 'moment'

class Todo extends React.Component{
    render(){
        var {id,text,completed,createdAt,completedAt} = this.props;
        var renderDate = ()=>{
            var message = 'Created '
            var timestamp = createdAt

            if(completed){
                message = 'Completed '
                timestamp = completedAt
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
        }
        return(
            <div onClick={()=>{
                this.props.onToggle(id)
            }}>
                <input type="checkbox" checked={completed} readOnly/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
}

module.exports = Todo