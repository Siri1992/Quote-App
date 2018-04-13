import React, { Component } from 'react';
import './TodoInput.css';
class TodoInput extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''}
        this.handleChange=this.handleChange.bind(this);
        this.addTodo=this.addTodo.bind(this);
    }
    handleChange(e){
        this.setState({value:e.target.value})
    }
    addTodo(todo){
        if(todo.length>0){
            this.props.addTodo(todo);
            this.setState({value:''});
        }
    }
    render(){
        return(
            <div>
                <textarea rows="4" cols="50" type="text" placeholder="Quote"
                value={this.state.value} onChange={this.handleChange}>
                </textarea>
                
                <button className="btn btn-primary"
                onClick={()=>this.addTodo(this.state.value)}>Submit Quote</button>
            </div>
        )
    }
}
export default TodoInput;