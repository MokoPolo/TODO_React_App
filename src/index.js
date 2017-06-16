import React from 'react';
import ReactDOM from 'react-dom';

const title = <div className="jumbotron text-center"><h1>TODOs</h1></div>;

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtVal: '',
      listofTodos: props.Listoftodos,
    };
  }

  handleChange = (e) => {
      this.setState({txtVal: e.target.value})
    };
                
  render() {//
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"/>
          <div className="col-md-6">
            <div className="form-group">
              <input id="turns" className="form-control" value={this.state.txtVal} 
                onChange={this.handleChange}
                onKeyPress={(e) => {
                if (e.key == "Enter") {
                  var arrayvar = this.state.listofTodos.slice();
                  arrayvar.push(this.state.txtVal);
                  this.setState({ listofTodos: arrayvar });
                  this.state.txtVal = "";
                }}
              } placeholder="What needs to be done" />
            </div>
          </div>
          <div className="col-md-3"/>
        </div>
        { 
          this.state.listofTodos.map((todoItem, i) => 
          <div className="row">
            <div className="col-md-3"/>
            <div className="col-md-6">
                <div key={i} className="checkbox">
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

const App = (props) => {
  const tasks = ["Get Milk", "Sleep", "Drive to work"];
    return (
      <div>
        {title}
        <Todos Listoftodos={tasks} />
      </div>
    );   
};


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();

