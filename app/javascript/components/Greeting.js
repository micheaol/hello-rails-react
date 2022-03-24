import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetings } from "../redux/thunk/api";
import PropTypes from "prop-types"


const Greeting = () => {
  const greets = useSelector(state => state.message)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const greet = Object.values(greets)
  return (
    <>
      <h1>{greet[1]}</h1>
      <h1>{greet[2]}</h1>
    </>
  )
}

export default Greeting
