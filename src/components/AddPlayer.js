import React from 'react';
import { connect } from 'react-redux';

import { addPlayer } from "../actions";

class AddPlayer extends React.Component {
  state = { name: '', initiative: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addPlayer(this.state.name, this.state.initiative, this.props.characterType);
    this.setState({ name: '', initiative: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control"
                 name="name"
                 value={this.state.name}
                 onChange={(e) => this.setState({ name: e.target.value })} />
        </div>

        <div className="form-group">
          <label>Initiative</label>
          <input type="text" className="form-control"
                 name="init"
                 value={this.state.initiative}
                 onChange={(e) => this.setState({ initiative: e.target.value })} />
        </div>

        <input type="submit" className="btn btn-success" value={ `Add ${this.props.title}` } />
      </form>
    )
  }
}

export default connect(null, { addPlayer })(AddPlayer);