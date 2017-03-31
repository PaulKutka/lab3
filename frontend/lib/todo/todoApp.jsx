import React from 'react';
import TodoItems from './TodoItems'
import TodoItemForm from './TodoItemForm'
import service from './todoInfraService'

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
     this.state = {
      todos: null
    }
  }

  render() {
    return <div>
        <TodoItems todos={this.state.todos}/>
        <TodoItemForm/>
        </div>
  }

    componentDidMount() {
    service.getTodoElements((todos) => {
      this.setState({  
        todos: todos
      })
    });

  }
}

export default TodoApp;