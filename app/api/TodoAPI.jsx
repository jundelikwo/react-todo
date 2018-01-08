import $ from 'jQuery'

module.exports = {
    setTodos(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos;
        }
    },
    getTodos(){
        var strTodos = localStorage.getItem('todos')
        var todos = []
        
        try{
            todos = JSON.parse(strTodos)
        } catch (e){

        }

        return $.isArray(todos) ? todos : []
    },
    filterTodos(todos,showCompleted,searchText){
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo)=>{
            return !todo.completed || showCompleted
        })

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo)=>{
            return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1; 
        })

        // Sort todos with non-completed first
        filteredTodos.sort((a,b)=>{
            if(!a.completed && b.completed){
                return -1;
            }else if(a.completed && !b.completed){
                return 1;
            }else{
                return 0;
            }
        })

        return filteredTodos
    }
}