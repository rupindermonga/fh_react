import React from "react";
import PropTypes from "prop-types";
class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        Latitude: {this.props.latitude}
        Longitude: {this.props.longitude}
        Address: {this.props.address}
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  latitude: PropTypes.node,
  longitude: PropTypes.node,
  address: PropTypes.node
};
export default Search;
