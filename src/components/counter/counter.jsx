import React from "react";
import { connect } from "react-redux";

const mapStateToProps = result => ({
  calc: result
});

const mapDispatchToProps = dispatch => ({
  onCase1: () => dispatch({ type: "case1" }),
  onCase2: () => dispatch({ type: "case2" })
});

const CounterComponent = ({ calc, onCase1, onCase2 }) => (
  <div>
    <p>{calc}</p>
    <button onClick={onCase1}>Add 3</button>
    <button onClick={onCase2}>Multiply by 3</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);