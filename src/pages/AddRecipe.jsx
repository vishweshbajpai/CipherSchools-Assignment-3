import classes from "./AddRecipe.module.css";

import React, { useContext, useRef, useState } from "react";
import RecipeContext from "../store/context";
import { useNavigate } from "react-router-dom";

let id = 1;
const errorMsg = "Please enter something!";

const AddRecipe = () => {
  const navigate = useNavigate();
  const recipeCxt = useContext(RecipeContext);

  const titleRef = useRef();
  const bodyRef = useRef();
  const dateRef = useRef();

  const [titleIsValid, setTitleIsValid] = useState();
  const [bodyIsValid, setBodyIsValid] = useState();
  const [dateIsValid, setDateIsValid] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const titleVal = titleRef.current.value;
    const bodyVal = bodyRef.current.value;
    const dateVal = dateRef.current.value;

    if (titleVal.trim().length === 0) {
      setTitleIsValid(false);
    } else {
      setTitleIsValid(true);
    }
    if (bodyVal.trim().length === 0) {
      setBodyIsValid(false);
    } else {
      setBodyIsValid(true);
    }
    if (dateVal.trim().length === 0) {
      setDateIsValid(false);
    } else {
      setTitleIsValid(true);
    }

    if (titleVal && bodyVal && dateVal) {
      recipeCxt.addRecipe({
        id: id++,
        title: titleVal,
        body: bodyVal,
        date: dateVal,
      });
      navigate("/all-recipes");
    }
  };
  return (
    <>
      <div className={classes.main}>
        <form className={classes.card} onSubmit={submitHandler}>
          <p>Title</p>
          <input ref={titleRef}></input>
          {titleIsValid === false && (
            <p className={classes.error}>{errorMsg}</p>
          )}
          <p>Body</p>
          <textarea ref={bodyRef}></textarea>
          {bodyIsValid === false && <p className={classes.error}>{errorMsg}</p>}
          <p>Date</p>
          <input type="date" ref={dateRef}></input>
          {dateIsValid === false && <p className={classes.error}>{errorMsg}</p>}
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
