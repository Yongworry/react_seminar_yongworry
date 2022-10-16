import React, {Component} from 'react';


class Create extends Component {
    render() {   
      return(
      <addtodo>       
         <form id="addTodoFrm" onSubmit={function (event) {
           event.preventDefault();
           console.log(event.target.importance.value, event.target.title.value, event.target.task.value, event.target.deadline.value);
           console.log(this.props.value);
           this.props.addTodo(event.target.importance.value, event.target.title.value, event.target.task.value, event.target.deadline.value);
       }}>
         <h2>add todo</h2>
         <input type='text' name='importance' placeholder='Importance'></input><br/>
         <input type='text' name='title' placeholder='Title'></input><br/>
         <input type='text' name='task' placeholder='Task'></input><br/>
         <input type='text' name='deadline' placeholder='Deadline'></input><br/>
         <button type="submit">add</button>
         </form>
      </addtodo>
      );
    }
  }

  export default Create;