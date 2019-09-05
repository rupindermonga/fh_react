import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_HOUSES_REQUEST = "GET_HOUSES_REQUEST";
const GET_HOUSES_SUCCESS = "GET_HOUSES_SUCCESS";

function getHouses() {
  console.log("getHouses() Action!!");
  return dispatch => {
    dispatch({ type: GET_HOUSES_REQUEST });
    return fetch("v1/houses.json")
      .then(response => response.json())
      .then(json => dispatch(getHousesSuccess(json)))
      .catch(error => console.log(error));
  };
}

export function getHousesSuccess(json) {
  return {
    type: GET_HOUSES_SUCCESS,
    json
  };
}
class Search extends React.Component {
  render() {
    const { houses } = this.props;
    const housesList = houses.map(house => {
      return (
        <li>
          {house.latitude} {house.longitude} {house.address}
        </li>
      );
    });
    return (
      <React.Fragment>
        Latitude: {this.props.latitude}
        Longitude: {this.props.longitude}
        Address: {this.props.address}
        <button className="getHousesBtn" onClick={() => this.props.getHouses()}>
          Search
        </button>
        <br />
        <ul>{housesList}</ul>
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
