var React = require('react');

var Todo = require('Todo');
var TodoAPI = require('TodoAPI');

var TodoList = React.createClass({
  render: function () {
    var {todos, searchText, showCompleted} = this.props;
    var renderTodos = function () {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return filteredTodos.map((todo) => {
        return <Todo key={todo.id} {...todo} />
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
