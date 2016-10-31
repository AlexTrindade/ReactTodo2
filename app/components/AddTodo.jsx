var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {addTodo} = this.props;
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      this.refs.todoText.focus();
      addTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="alx-form-margin">
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="location" placeholder="What do you need todo?" ref="todoText"/>
            <button className="button expanded">Add Todo</button>
          </form>
        </div>
    )
  }
});

module.exports = AddTodo;
