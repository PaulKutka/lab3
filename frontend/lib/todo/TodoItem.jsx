import React from 'react';
import service from './todoInfraService'

class TodoItem extends React.Component {

  constructor(props) {
    super(props);


    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event){
    let form = {
      title: this.props.todo.title,
      description: this.props.todo.description,
      isDone: event.target.value
    }
    service.updateTodoElement((todo) => {
        this.props.handler();
    }, form, this.props.todo.id);


  }

   handleDelete(event){
    service.deleteTodoElement((response) => {
        this.props.handler();
    }, this.props.todo.id);


  }
  
  render() {

  let isDone = "Not Done";
   if (this.props.todo.isDone === "true") {
     isDone = "Is done";
   }

   return (
           <div>
                {this.props.todo.title} 
                {this.props.todo.description}
                {isDone} 
                {this.props.todo.creationDate} 
                {this.props.todo.updateDate}               
                <select value={this.props.todo.isDone} onChange={this.handleChange}>
                      <option value={true}>Is Done</option> 
                      <option value={false}>Not Done</option>
                </select>
                <button onClick={this.handleDelete}>Delete</button>
          </div>
            )}
    

}

export default TodoItem;