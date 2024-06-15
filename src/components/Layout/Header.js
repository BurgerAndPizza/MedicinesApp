import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return(
        <Fragment>
            <header className= {classes.header}>
                <h1>Medicines</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
           
           
            <div className={classes['main-image']}>
                <img src="https://www.msm.edu/online/makingmedicines/images/makingmedicines784.jpg" alt="Medicines for every disease"/>
            </div>
            <form>
                <label className={classes.name}>Medicine Name</label>
                <label className={classes.description}>Description</label>
                <label className={classes.price}>Price</label>
                <div>
                <input type="text" />
                <input type="text" />
                <input type="number" />
                <button type="submit">Add</button>
                </div>
            </form>
            

        </Fragment>
    ); 
}
export default Header;