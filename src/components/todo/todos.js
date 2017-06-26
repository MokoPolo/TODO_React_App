import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';

class Todos extends React.Component {
  static get propTypes() { 
      return { 
          todos: PropTypes.object.isRequired,
      }; 
  }
  constructor(props) {
    super(props);
    this.state = {
      todo: { title: "" },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) {
    const todo = this.state.todo;
    todo.title = e.target.value;
    this.setState( {todo: todo});
  }

  handleKeyPress(e) {
    if (e.key == "Enter") {
      //const arrayvar = this.state.listofTodos.slice();
      //arrayvar.push(this.state.txtVal);
      //this.setState({ listofTodos: arrayvar });
      //this.setState({txtVal: ""});
      this.props.actions.createTodo(this.state.todo)
    }
  }
  todoRow(todoItem, i) {
    return (
      <div key={i} className="row">
        <div className="col-md-3"/>
        <div className="col-md-6">
            <div className="checkbox">
            <label><input type="checkbox"/>{todoItem.title}</label>
            </div>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
  render() {//
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"/>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder="What needs to be done" />
            </div>
          </div>
          <div className="col-md-3"/>
        </div>
        {this.props.todos.map(this.todoRow)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);