import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsAnimated, setBtnIsAnimated] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsAnimated(true);
    const timer = setTimeout(() => {
      setBtnIsAnimated(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Grocery Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
