import React from 'react';
import service from './todoInfraService'

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
       service.postTodoElemet((todo) => {
        if(todo) {
            this.props.handler();
            this.setState({ title: "" });
            this.setState({ description: "" });
        }
       }, form)

      
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
                    <label>
                        Title:
                        <input type="text" name="title" value={this.state.title} onChange = {this.handleTitleChange}/>
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={this.state.description} onChange = {this.handleDescriptionChange}/>
                    </label>


                    <button type="button" value="Submit" onClick = {this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }


}

export default TodoItemForm;