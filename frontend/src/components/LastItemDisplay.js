import React, { Component } from 'react';
import '../syles/LastItemDisplay.css';

import { connect } from 'react-redux'

// -------------------------------------------------------------------
// Since this component doesn't have access to ToDoList.js's state...
// This component doesn't know what the last item added was
// Redux can help fix this
// -------------------------------------------------------------------

class LastItemDisplay extends Component {
  render() {
    let list = this.props.list
    console.log(this.props.state)
    return (
      <div id="last-item-display">
        <h4> {list[list.length - 1]} </h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.list.list,
  state
})

export default connect(mapStateToProps)(LastItemDisplay);
