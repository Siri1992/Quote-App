import React, { Component } from 'react';
import './TodoItem.css'

class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        counter: 0
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      this.setState(
        (prevState) => ({
          counter:prevState.counter+1
        })
      )  
  }
  render(){
      return (
          <div>
            <button className="likeTodo" type="button" 
            onClick={this.handleClick} >{this.state.counter} Like </button>
          </div>
      )
  }
}
class TodoItem extends React.Component{
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render(){
        return(
            <div className="todoWrapper">
                <LikeButton />
                <button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}>remove</button>
                {this.props.todo.text}
                 
            </div>
        )
    }
}
export default TodoItem;