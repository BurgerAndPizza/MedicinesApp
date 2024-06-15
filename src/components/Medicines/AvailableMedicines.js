import classes from "./AvailableMedicines.module.css";

const DUMMY_MEDICINE = [
  {
    id: 'm1',
    name: 'Paracetamol',
    description: 'Cures fever',
    price: 20,
  },
  {
    id: 'm2',
    name: 'Dolo',
    description: 'Cures fever and body aches',
    price: 50,
  },
  {
    id: 'm3',
    name: 'Cetirizine',
    description: 'Cures runny nose',
    price: 15,
  },
  {
    id: 'm4',
    name: 'Evion',
    description: 'Boosts collagen',
    price: 100,
  },
];

const AvailableMedicines = () => {
  
  const medicineList = DUMMY_MEDICINE.map((medicine) => (
    <li key={medicine.id} className={classes['medicine-item']}>
      <div className={classes.details}>
        <h3>{medicine.name}</h3>
        <p className={classes.description}>{medicine.description}</p>
        <span className={classes.price}>Rs.{medicine.price.toFixed(2)}</span>
        <button type="submit" className={classes.cartBtn}>Add to cart</button>
        <label>Quantity</label>
        <input type="number" className={classes.qty}/>
       
      </div> 
      
    </li>
  ));
  

  return (
    <section className={classes.medicines}>
      <ul>{medicineList}</ul>
    </section>
  );
};

export default AvailableMedicines;