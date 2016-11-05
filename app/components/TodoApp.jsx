var React = require('react');

var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk dog',
          completed: false
        },
        {
          id: 2,
          text: 'Fed cat',
          completed: false
        },
        {
          id: 3,
          text: 'Make a cake',
          completed: false
        },
        {
          id: 4,
          text: 'Play video games',
          completed: false
        }
      ]
    }
  },
  handleAddTodo: function(text) {
    var {todos} = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length + 1,
          text,
          completed: false
        }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    return (
      <div className="row">
        <div className="small-11 medium-6 small-centered columns">
          <h1 className="text-center page-title alx-title-margin">Todo App</h1>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} showCompleted={showCompleted} searchText={searchText}/>
          <AddTodo addTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
