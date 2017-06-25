import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as todoActions from '../../actions/todoActions';

const title = <div className="jumbotron text-center"><h1>TODOs</h1></div>;

class TodosPage extends React.Component {
  static get propTypes() { 
      return { 
          todos: PropTypes.array,
          dispatch: PropTypes.func.isRequired,
          actions: PropTypes.func.isRequired 
      }; 
  }
  constructor(props) {
    super(props);
    this.state = {
      todo: { titleo: "feed the dog" },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  handleChange(e) {
    this.setState({todo: e.target.value});
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
    this.props.actions.createTodo(this.state.todo);
  }
  todoRow(todoItem, i) {
    return (
    <div key={i} className="row">
      <div className="col-md-3"/>
      <div className="col-md-6">
        <div className="checkbox">
          <label><input type="checkbox"/>{todoItem.titleo}</label>
        </div>
    </div>
    <div className="col-md-3" /></div>
    );
  }
  render() {//
    return (
            <div>
        {title}
      <div className="container">
        <div className="row">
          <div className="col-md-3"/>
          <div className="col-md-6">
            <div className="form-group">
              <input id="turns" className="form-control"  
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder="What needs to be done" />
              <input type="submit" className="btn"
        onClick={this.onClickSave}
        value="Save" />
            </div>
          </div>
          <div className="col-md-3"/>
        </div>
        {this.props.todos.map(this.todoRow)}
      </div>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps){
  return {
    todos: state.todos
  };
}
export default connect(mapStateToProps)(TodosPage);