import { Fragment} from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return (
        
            <Fragment>
        
            <header className={classes.header}>
               <h1>Medicines</h1>
               <HeaderCartButton onClick={props.onShowCart} />
            </header>
              <div className={classes['main-image']}>
                <img src="https://png.pngtree.com/background/20240412/original/pngtree-vibrant-medication-assorted-colorful-pills-and-capsules-against-blue-background-empty-picture-image_8466410.jpg" alt="Medicines for every disease" />
            </div>
    
           </Fragment>
     
    );
  };
  
  export default Header;
