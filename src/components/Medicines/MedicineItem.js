import { useContext } from "react";
import classes from "./MedicineItem.module.css";
import MedicineForm from "./MedicineForm";
import CartContext from "../Store/Cart-context";
const MedicineItem = (props) =>{
    const carCtx = useContext(CartContext);


    const price = `$ ${props.price.toFixed()}`;
    const addToCartHandler = amount => {
        carCtx.addItem({
            id : props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    
    return(
        <li>
            <div className={classes.details}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>Rs.{props.price}</div>
                <MedicineForm onAddToCart={addToCartHandler}/>
            </div>
           
        </li>
    );
};
export default MedicineItem;