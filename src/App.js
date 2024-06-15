import { Fragment } from 'react';
import Header from "./components/Layout/Header";
import AvailableMedicine from './components/Medicines/AvailableMedicines';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
      <AvailableMedicine/>
      </main>
      
    </Fragment>
  );
}

export default App;
