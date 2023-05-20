import classes from "./GroceryItem.module.css";
import GroceryItemForm from "./GroceryItemForm";

const GroceryItem = (props) => {
  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <GroceryItemForm />
      </div>
    </li>
  );
};
export default GroceryItem;
