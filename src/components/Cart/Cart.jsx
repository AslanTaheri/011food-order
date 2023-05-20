import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "a1", name: "Avocado", amount: 3, price: 7.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>7.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
