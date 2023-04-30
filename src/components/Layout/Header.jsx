import { Fragment } from "react";

import avocadoImage from "../../assets/avocado.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Avocados and More</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={avocadoImage} alt="An image of a avocado" />
      </div>
    </Fragment>
  );
};
export default Header;
