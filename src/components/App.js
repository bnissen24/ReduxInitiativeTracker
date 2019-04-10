import React from 'react';

import InitiativeList from './InitiativeList';
import TeamList from "./TeamList";

const App = () => {
  return (
    <div className="container" style={{ marginTop: '15px' }}>
      <div className="row">
        <div className="col-sm-4">
          <TeamList title="Players" stateList="players" />
        </div>
        <div className="col-sm-4">
          <InitiativeList/>
        </div>
        <div className="col-sm-4">
          <TeamList title="Enemies" stateList="enemies" />
        </div>
      </div>
    </div>
  )
};

export default App;