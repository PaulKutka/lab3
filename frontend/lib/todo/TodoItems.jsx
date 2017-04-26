import React from 'react';
import TodoItem from './TodoItem'

class TodoItems extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    if (this.props.todos) {

      return (
        <div>
          <ul>
            {this.props.todos.map(todo => {

              return <li key={todo._id}> <TodoItem todo={todo} handler = {this.props.handler}/>
              
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
    }
  }


}

export default TodoItems;