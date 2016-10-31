var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
