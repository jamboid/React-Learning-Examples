import React, { Component } from 'react';
import PropTypes from "prop-types";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'cp_Card'}>
        {this.props.name}
      </div>
    );
  }
}

// Card.propTypes = {
//   name: PropTypes.string.isRequired
// };

export default Card;
