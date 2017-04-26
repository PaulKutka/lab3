import React from 'react';
import TodoItem from './TodoItem'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class TodoItems extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    if (this.props.todos) {

      return (
        <div>
         {/*<ul>*/}
            <Table selectable={true}>
               <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
         <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>Creation Date</TableHeaderColumn>
         <TableHeaderColumn>Update Date</TableHeaderColumn>
         <TableHeaderColumn>Change Status</TableHeaderColumn>
          <TableHeaderColumn>Delete</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
            {this.props.todos.map(todo => {

            return <TodoItem todo={todo} handler = {this.props.handler}/> 

            })}
  
           </TableBody>
         </Table>
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


  // /*return <li key={todo._id}> <TodoItem todo={todo} handler = {this.props.handler}/>*/*/}
              
  //            //  </li>
  //           {/*})}*/}
  //         {/*</ul>