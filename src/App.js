import { useState } from 'react';
import Header from './components/Layout/Header';
import AvailableMedicine from './components/Medicines/AvailableMedicines';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartProvider';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <AvailableMedicine/>
      </main>
      
    </CartProvider>
  );
}

export default App;
