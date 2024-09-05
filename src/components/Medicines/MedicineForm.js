import classes from "./MedicineForm.module.css";
import Input from "../UI/Input";
import { useRef, useState , useContext} from "react";
import CartContext from "../Store/Cart-context";
const MedicineForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const cartCtx = useContext(CartContext);
  
    const submitHandler = (event) => {
      event.preventDefault();
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;
  
      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }
  
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: enteredAmountNumber,
        price: props.price,
      });
  
      setAmountIsValid(true);
    };
  
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button className={classes.AddBtn}>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    );
  };
  
  export default MedicineForm;