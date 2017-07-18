  import React, {PropTypes} from 'react';

  const taskListRow = (taskItem, i) => {
    return (
      <div key={i} className="row">
        <div className="col-md-3"/>
        <div className="col-md-6">
            <div className="checkbox">
            <label><input type="checkbox"/>{taskItem.title}</label>
            </div>
        </div>
        <div className="col-md-3" />
      </div>
    );
  };

export default taskListRow;
