import React from 'react';
import service from './todoInfraService'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class TodoItem extends React.Component {


  constructor(props) {
    super(props);

this.styles = {
  button: {
    margin: 12,
  },
   customWidth: {
    width: 150,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event, index, value){
    let form = {
      title: this.props.todo.title,
      description: this.props.todo.description,
      isDone: value
    }
    service.updateTodoElement(form, this.props.todo._id, (todo) => {
        this.props.handler();
    });


  }

   handleDelete(event){
    service.deleteTodoElement(this.props.todo._id, (response) => {
        this.props.handler();
    });


  }
  
  render() {

  let isDone = "Not Done";
  
   if (this.props.todo.isDone === true) {
     isDone = "Is done";
   }

   return (

     <TableRow key={this.props.todo._id}>

       <TableRowColumn>{this.props.todo.title}</TableRowColumn>
       <TableRowColumn>{this.props.todo.description}</TableRowColumn>
        <TableRowColumn>{isDone}</TableRowColumn>
         <TableRowColumn>{this.props.todo.creationDate} </TableRowColumn>
           <TableRowColumn>{this.props.todo.updateDate}</TableRowColumn>       
                
               
          <TableRowColumn>   
                <SelectField
          value={this.props.todo.isDone}
          onChange={this.handleChange}
          /*style={this.styles.customWidth}*/
        >
          <MenuItem value={true} primaryText="Is Done" />
          <MenuItem value={false} primaryText="Not Done" />
      
        </SelectField>               
           </TableRowColumn>   

           <TableRowColumn>  
                  <RaisedButton
      onClick={this.handleDelete}
      label="Delete"
      secondary={true}
      style={this.styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
    </TableRowColumn> 
          </TableRow> 

            )}
    

}

export default TodoItem;