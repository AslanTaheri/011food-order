import Input from "../../UI/Input";
import classes from "./GroceryItemForm.module.css";

const GroceryItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        input={{
          label: "Amount:",
          id: "Amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default GroceryItemForm;
