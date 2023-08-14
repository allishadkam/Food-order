import React, { Fragment } from 'react'
import classes from "./Header.module.css"
import MealsImage from "../../assets/meals.jpg"
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <button>Card</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt='a table full of react meals'></img>
      </div>
    </Fragment>
  )
}

export default Header
