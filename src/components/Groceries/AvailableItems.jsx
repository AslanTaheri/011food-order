import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableItems.module.css";
import GroceryItem from "./GroceryItem/GroceryItem";

const AvailableItems = () => {
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    const fetchBasket = async () => {
      const response = await fetch(
        "https://avocadoor-9ad68-default-rtdb.firebaseio.com/vegetables.json"
      );
      const responseData = await response.json();
      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setGroceries(loadedItems);
    };
    fetchBasket();
  }, []);

  const items = groceries.map((item) => (
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
