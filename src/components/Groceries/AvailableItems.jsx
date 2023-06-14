import Card from "../UI/Card";
import classes from "./AvailableItems.module.css";
import GroceryItem from "./GroceryItem/GroceryItem";

const AvailableItems = () => {
  const items = DUMMY_ITEMS.map((item) => (
    <GroceryItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <section className={classes.items}>
      <Card>
        <ul>{items}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
