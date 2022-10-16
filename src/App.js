import React, {Component} from 'react';
import { Table,Header,HeaderRow,HeaderCell,Body,Row,Cell} from '@table-library/react-table-library/table';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todo: [
        {importance: 'high', title : 'SPARCS', task: 'homework for newbies', deadline: "today",},
        {importance: 'middle', title : 'test', task: 'midterm', deadline: "tomorrow",},
      ],
    }
  };

  
  render() {
    console.log('working!'); console.log(this.state.todo);
    return (
      <div>
      <Table data={{nodes : this.state.todo}}>{(tableList) => (
        <>
        <Header>
          <HeaderRow>
            <HeaderCell>Importance</HeaderCell>
            <HeaderCell>Title</HeaderCell>
            <HeaderCell>Task</HeaderCell>
            <HeaderCell>Deadline</HeaderCell>
          </HeaderRow>
        </Header>
        <Body>
        {tableList.map((item) => (
          <Row key={item.id} item={item}>
            <Cell>{item.importance}</Cell>
            <Cell>{item.title}</Cell>
            <Cell>{item.task}</Cell>
            <Cell>{item.deadline}</Cell>
          </Row>
        ))}
      </Body>
      </>
      )}</Table><br/>

      <form onSubmit={function (event) {
        event.preventDefault();
        console.log(this.state.todo);
        var todo = this.state.todo;
        var updated = todo.concat(
        {importance:event.target.importance.value, title:event.target.title.value, task:event.target.task.value, deadline:event.target.deadline.value}
        )
        this.setState({
          todo:updated
        })          
      }.bind(this)}>
      <h2>add todo</h2>
      <select name='importance' placeholder='Importance' required>
        <option value="high">High</option>
        <option value="mid">Middle</option>
        <option value="low">Low</option>
      </select><br/>
      <input type='text' name='title' placeholder='Title' required></input><br/>
      <textarea rows='10' cols='20' name='task' placeholder='Task'></textarea><br/>
      <input type='text' name='deadline' placeholder='Deadline' required></input><br/>
      <button type="submit">add</button>
      </form>
    </div>
    ); 

  }
  
  
  
};

export default App;
