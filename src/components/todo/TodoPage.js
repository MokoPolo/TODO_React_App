import ReactDOM from 'react-dom';
import React from 'react';
import Todos from './todos';


const title = <div className="jumbotron text-center"><h1>TODOs</h1></div>;

const App = (props) => {
  const tasks = ["Get Milk", "Sleep", "Drive to work"];
    return (
      <div>
        {title}
        <Todos Listoftodos={tasks} />
      </div>
    );   
};

export default App;