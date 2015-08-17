var React = require('react');
    
var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={this.props.data} />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  // Write code here
  getInitialState: function() {
    return {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };
  },
  changeTitle: function (e) {
    var state = this.state;
    state.titleValue = e.target.value;
    this.setState(state);
  },
  changeDetail: function (e) {
    var state = this.state;
    state.detailValue = e.target.value;
    this.setState(state);
  },
  addTodo: function() {
    var state = this.state;
    state.data.push({
      title: state.titleValue,
      detail: state.detailValue
    });
    this.setState(state);
  },
  deleteTodo: function (key) {
    var state = this.state;
    var idx = -1;
    for (var i = 0; i < state.data.length; i++) {
      if (state.data[i].title === key) {
        idx = i;
        break;
      }
    }
    if (idx > -1) {
      state.data.splice(idx, 1);
      this.setState(state);
    }
  },
  render: function() {
      var func = this.deleteTodo;
      var todo = this.state.data.map(function(obj) { return <Todo title={obj.title} onDelete={func} key={obj.title}>{obj.detail}</Todo>});
      return (
        <div className = "todoList">
            <div>
              Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
              Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
              <button onClick={this.addTodo}>Add</button>
            </div>
            <table style={{border: "2px solid black"}}>
              <tbody>
                {todo}
              </tbody>
            </table>
        </div>
    );
  }
});


var Todo = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
      onDelete: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
      return {checked: false}
    },
    handleChange: function() {
      var checked = !this.state.checked;
      this.setState({checked: checked});
    },
    _onDelete: function () {
      this.props.onDelete(this.props.title);
    },
    render: function() {
      var todoStyle = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
        return (
            <tr style={todoStyle} >
                <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
                <td style={style.tableContent}>
                  <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
                </td>
                <td style={style.tableContent}>{this.props.title}</td>
                <td style={style.tableContent}>{this.props.children}</td>
            </tr>
        );
    }
});

var TodoForm = React.createClass({
  // Write code here
  render: function() {
      return (
        <div className = "todoForm">
            I am a TodoForm.
        </div>
      );
  }
});

var style = {
      checkedTodo: {
        textDecoration: "line-through"
      },
      notCheckedTodo: {
        textDecoration: 'none'
      },
      tableContent: {
        border: "1px solid black"
      }
    };
    
module.exports = TodoBox;
