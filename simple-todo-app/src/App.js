import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  details(index){
  let todos = this.state.todos;

  let todo = todos.find(function(todo){
      return todo.counter === index
    });
  console.log(todo);
}

  removeToDo(index){
    let todos = this.state.todos;

    let todo = todos.find(function(todo){
      return todo.counter === index
    });

    todos.splice(todo, 1);

    this.setState({
    todos: todos
  });


}

  addToDo(event) {
    event.preventDefault();
    //console.log(this.refs);
    let name = this.refs.name.value;
    let completed = this.refs.completed.value;
    let counter = this.state.counter;
  
    //this packages up the toDo and name maps to name and completed maps to completed because of es6 syntax
    let todo = {
      name, 
      completed,
      counter
    };

  counter+=1;
  let todos = this.state.todos;

  todos.push(todo);
  this.setState({
    todos: todos,
    counter: counter
  });

  this.refs.toDoForm.reset();
}

  constructor(){
    //instantiates the base class AKA the component
    super();
    //add a method - "this" refers to the App
    this.details = this.details.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.state = {
      todos: [],
      title: "React To-Do Application",
      counter: 0
  }
}
  render() {
    //on line 37, form's default behavior is to refresh page, so we need to actually pass in an event for the addToDo method so that the data goes through
    //comes from the above constructor
      let title = this.state.title;
      let todos = this.state.todos;
    return (

      <div className="App">
        <h1>To Do List</h1>
        <form ref="toDoForm">
          <input type="text" ref="name" placeholder="what do you need to do?" />
          <input type="text" ref="completed" placeholder="Is it completed?" />
          <button onClick={this.addToDo}>Add To-Do</button>
        </form>
        <ul>
          {todos.map((todo => <li key={todo.counter}>{todo.name}
            <button onClick={this.removeToDo.bind(null, todo.counter)}>Remove To-Do</button>
            <button onClick={this.details.bind(null, todo.counter)}>Details</button>
            </li>))}
        </ul>
      </div>
    );
  }
}

export default App;
