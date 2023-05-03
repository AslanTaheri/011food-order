import classes from "./Header.module.css";
import avocadoImage from "../../assets/avocado.jpg";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>AvocaDoor</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={avocadoImage} alt="An image of a avocado" />
      </div>
    </>
  );
};
export default Header;
