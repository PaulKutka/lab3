import React from 'react';
import service from './todoInfraService'

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo
    }
  }

  render() {
   return (
           <div>
                {this.state.todo.title} 
                {this.state.todo.isDone} 
                {this.state.todo.description} 
                {this.state.todo.createDate} 
                {this.state.todo.updateDate} 
                </div>
            )}
    


    /*if (this.state.todos) {

      return (
        <div>
          <ul>
            {this.state.todos.map(todo => {
              return <li key={todo.id}>
                {todo.title} 
                {todo.isDone} 
                {todo.description} 
                {todo.createDate} 
                {todo.updateDate} 
                </li>
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          Nera dar nieko :(
        </div>
      );
    }*/
  

  componentDidMount() {
    service.getTodoElements((todos) => {
      this.setState({  
        todos: todos
      })
    });

  }
}

export default TodoItem;