import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_HOUSES_REQUEST = "GET_HOUSES_REQUEST";

function getHouses() {
  console.log("getHouses() Action!!");
  return {
    type: GET_HOUSES_REQUEST
  };
}

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        Latitude: {this.props.latitude}
        Longitude: {this.props.longitude}
        Address: {this.props.address}
        <button className="getHousesBtn" onClick={() => this.props.getHouses()}>
          Search
        </button>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  latitude: PropTypes.node,
  longitude: PropTypes.node,
  address: PropTypes.node
};

const structuredSelector = createStructuredSelector({
  houses: state => state.houses
});

const mapDisPatchToProps = { getHouses };

//export default Search;

export default connect(
  structuredSelector,
  mapDisPatchToProps
)(Search);
