import Card from "../UI/Card";
import classes from "./ItemsSummary.module.css";

const ItemsSummary = () => {
  return (
    <Card className={classes.summary}>
      <h2>Avocados and More!</h2>
      <p>
        Get those green vegetables and fruits for your smoothies, curated by our
        select farmers and brought to you by AvocaDoor.
      </p>
    </Card>
  );
};
export default ItemsSummary;
