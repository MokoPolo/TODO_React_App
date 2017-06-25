import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';

const title = <div className="jumbotron text-center"><h1>TODOs</h1></div>;

class TodosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { title: "feed the dog" }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  handleChange(event) {
    const todo = this.state.todo;
    debugger;
    todo.title = event.target.value;
    this.setState({todo: todo});
  }

  handleKeyPress(e) {
    if (e.key == "Enter") {
      //const arrayvar = this.state.todos.slice();
      //arrayvar.push(this.state.txtVal);
      //this.setState({ todos: arrayvar });
      //this.setState({txtVal: ""});
      this.props.actions.createTodo(this.state.todo);
    }
  }

  onClickSave() {
    debugger;
    this.props.actions.createTodo(this.state.todo);
  }
  todoRow(todoItem, index) {
    return <div key={index}>{todoItem.title}</div>;
  }
  render() {
    return (
      
      <div className="container">
        <h1>Todos</h1>
        {this.props.todos.map(this.todoRow)}
            <div className="form-group">
              <input type="text"
                onChange={this.handleChange}
                 />
              <input type="submit" className="btn"
                onClick={this.onClickSave}
                value="Save" />
            </div>
        
        </div>
    );
  }
}

TodosPage.propTypes = {
          todos: PropTypes.array,
          dispatch: PropTypes.func.isRequired,
          actions: PropTypes.func.isRequired 
};

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

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);