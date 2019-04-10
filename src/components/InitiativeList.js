import React from 'react';
import { connect } from 'react-redux';

const InitiativeList = ({ characters }) => {
  characters = characters.sort((a, b) => {
    return b.initiative - a.initiative;
  });

  let characterRecords = characters.map(char => {
    return (
      <li key={char.id}
        className="list-group-item d-flex justify-content-between align-items-center">
        { char.name }
        <span className="badge badge-primary badge-pill">{ char.initiative }</span>
      </li>
    );
  })

  return (
    <ul className='list-group'>
      { characterRecords }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters
  }
}

export default connect(mapStateToProps)(InitiativeList);