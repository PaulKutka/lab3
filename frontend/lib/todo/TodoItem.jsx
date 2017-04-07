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
    service.updateTodoElement(form, this.props.todo.id, (todo) => {
        this.props.handler();
    });


  }

   handleDelete(event){
    service.deleteTodoElement(this.props.todo.id, (response) => {
        this.props.handler();
    });


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