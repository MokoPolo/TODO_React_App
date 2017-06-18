import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  static get propTypes() { 
      return { 
          Listoftodos: PropTypes.array 
      }; 
  }
  constructor(props) {
    super(props);
    this.state = {
      txtVal: '',
      listofTodos: props.Listoftodos,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) {
    this.setState({txtVal: e.target.value});
  }

  handleKeyPress(e) {
    if (e.key == "Enter") {
      const arrayvar = this.state.listofTodos.slice();
      arrayvar.push(this.state.txtVal);
      this.setState({ listofTodos: arrayvar });
      this.setState({txtVal: ""});
    }
  }

  render() {//
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"/>
          <div className="col-md-6">
            <div className="form-group">
              <input id="turns" className="form-control" value={this.state.txtVal} 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder="What needs to be done" />
            </div>
          </div>
          <div className="col-md-3"/>
        </div>
        { 
          this.state.listofTodos.map((todoItem, i) => 
          <div key={i} className="row">
            <div className="col-md-3"/>
            <div className="col-md-6">
                <div className="checkbox">
                <label><input type="checkbox"/>{todoItem}</label>
                </div>
            </div>
            <div className="col-md-3" />
          </div>
        )}
      </div>
    );
  }
}

export default Todos;