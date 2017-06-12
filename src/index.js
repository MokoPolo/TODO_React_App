import React from 'react';
import ReactDOM from 'react-dom';

const title = <div className="jumbotron text-center"><h1>TODOs</h1></div>;

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" onKeyPress={(e) => {
                debugger;
                if (e.key == "Enter") {
                  this.props.Listoftodos.push(e.target.target.value)
                }}
              } placeholder="What needs to be done" />
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        { this.props.Listoftodos.map((todoItem, i) => 
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div key={i} className="checkbox">
                <label><input type="checkbox"/>{todoItem}</label>
                </div>
            </div>
            <div className="col-md-3"></div>
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

