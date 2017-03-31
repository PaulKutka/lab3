import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
   return (
           <div>
                {this.props.todo.title} 
                {this.props.todo.isDone} 
                {this.props.todo.description} 
                {this.props.todo.createDate} 
                {this.props.todo.updateDate} 
                </div>
            )}
    

}

export default TodoItem;