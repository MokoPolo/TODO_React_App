import React from 'react';
import ReactDOM from 'react-dom';


const title = <div className="jumbotron text-center"><h1>TODOs</h1></div>;

const NewTodo = props => {
  return (
    <div>
      <div className="md-col-10">
        <input class="form-control" placeholder="Add todo" />
      </div>
      <div className="md-col-12">
        <button id="checkAll" class="btn">Add</button>
      </div>
    </div>
  );
};

class Todos extends React.Component {
  //this.props.getNumber
  // might have to declare the prop to access it
  // prop is the array of todos
  // this I can map it to the part that says get milk
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" placeholder="What needs to be done" />
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
              <div className="checkbox">
              <label><input type="checkbox"/>Get milk</label>
              </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

const App = (props) => {
    return (
      <div>
        {title}
        <Todos />
      </div>
    );   
};

/*class App extends React.Component {
	render() {
  	return (
    	<Todo />
    );
  }
}*/

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();

