import Card from "../UI/Card";
import classes from "./AvailableItems.module.css";
import GroceryItem from "./GroceryItem/GroceryItem";

const DUMMY_ITEMS = [
  {
    id: "m1",
    name: "Avocado 01",
    description: "This is your first Avocado!",
    price: 5.99,
  },
  {
    id: "m2",
    name: "Avocado 02",
    description: "This is your second Avocado!",
    price: 10.99,
  },
  {
    id: "m3",
    name: "Avocado 03",
    description: "This is your third Avocado!",
    price: 15.99,
  },
  {
    id: "m4",
    name: "Avocado 04",
    description: "This is your fourth Avocado!",
    price: 20.99,
  },
];

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
