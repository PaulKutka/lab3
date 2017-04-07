import React from 'react';
import service from './todoInfraService'

import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

class TodoItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUpdating: null,
            title: "",
            description: "",
            isDone: ""
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        // this.handleIsDoneChange = this.handleIsDoneChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }

    // handleIsDoneChange(event) {
    //     this.setState({ isDone: event.target.value });
    // }


    handleSubmit(event) {
       let form = {
           title: this.state.title,
           description: this.state.description
       }
       service.postTodoElemet(form, (todo) => {
        if(todo) {
            this.props.handler();
            this.setState({ title: "" });
            this.setState({ description: "" });
        }
       })

      
    }

    render() {

        /*const isUpdating = this.state.isUpdating;

        let setDone = null;
        if (isUpdating) {
            setDone = <label>
                Set done:
                        <input type="text" name="isDone" onChange={this.handleIsDoneChange}/>
            </label>
        }*/

        return (
            <div>
                <form>
                      <TextField
      hintText="Title"
      onChange={this.handleTitleChange}
      type="input"
      name="title"
      value={this.state.title}
    />
                    {/*<label>
                        Title:
                        <input type="text" name="title" value={this.state.title} onChange = {this.handleTitleChange}/>
                    </label>*/}
                   <TextField
      hintText="Description"
      onChange={this.handleDescriptionChange}
      type="input"
      name="description"
      value={this.state.description}
    />              
                    {/*<label>
                        Description:
                        <input type="text" name="description" value={this.state.description} onChange = {this.handleDescriptionChange}/>
                    </label>*/}


                         <RaisedButton label="Submit" type="button" value="Submit" onClick = {this.handleSubmit}/>  
                
                </form>
            </div>
        )
    }


}

export default TodoItemForm;