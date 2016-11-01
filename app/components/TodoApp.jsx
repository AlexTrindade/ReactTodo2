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
          text: 'Walk dog'
        },
        {
          id: 2,
          text: 'Fed cat'
        },
        {
          id: 3,
          text: 'Make a cake'
        },
        {
          id: 4,
          text: 'Play video games'
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
          text
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
    var {todos} = this.state;
    return (
      <div className="row">
        <div className="small-11 medium-6 small-centered columns">
          <h1 className="text-center page-title alx-title-margin">Todo App</h1>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} />
          <AddTodo addTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
