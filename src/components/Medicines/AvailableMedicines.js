import { useState } from "react";
import classes from "./AvailableMedicines.module.css";
import Card from "../UI/Card";
import MedicineItem from "./MedicineItem";

const DUMMY_MEDICINES = [
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
    price: 18,
  },
];

const AvailableMedicines = () => {
  const [medicines, setMedicines] = useState(DUMMY_MEDICINES);
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (medicineName.trim().length === 0 || description.trim().length === 0 || price.trim().length === 0) {
      return;
    }

    setMedicines((prevMedicines) => [
      ...prevMedicines,
      { id: `m${prevMedicines.length + 1}`, name: medicineName, description: description, price: +price },
    ]);

    setMedicineName('');
    setDescription('');
    setPrice('');
  };

  const medicineList = medicines.map((medicine) => ( // Use `medicines` state here
    <MedicineItem
      key={medicine.id}
      id={medicine.id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
    />
  ));

  return (
    <section className={classes.medicines}>
      <form onSubmit={submitHandler}>
        <div className={classes.label}>
          <label className={classes.name}>Name</label>
          <label className={classes.description}>Description</label>
          <label className={classes.price}>Price</label>
        </div>
        <div className={classes.inputs}>
          <input type="text" value={medicineName} onChange={(event) => setMedicineName(event.target.value)} />
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
          <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
          <button type="submit">Add</button>
        </div>
      </form>
      <Card>
        <ul className={classes.list}>{medicineList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMedicines;
