import React from 'react';
import todo from '/home/paulius/Projects/lab3/frontend/lib/todo/TodoItem.jsx'
import service from './todoInfraService'
class TodoItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: null
    }
  }

  render() {
    if (this.state.todos) {

      return (
        <div>
          <ul>
            {this.state.todos.map(todo => {
              return <li key={todo.id}> <todo address={todo} /> </li>
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
    }
  }

  componentDidMount() {
    service.getTodoElements((todos) => {
      this.setState({  
        todos: todos
      })
    });

  }
}

export default TodoItems;