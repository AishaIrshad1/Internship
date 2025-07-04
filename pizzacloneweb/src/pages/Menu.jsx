import { useState } from "react";
import Item from "../components/Item";
import pizza from "../data/pizza.json";


export default function Menu() {
  const [PizzaData, setPizzaData] = useState(pizza);

  return (
    <div className="flex flex-col gap-2">
      {PizzaData.map((data) => (
        <Item data={data} />
      ))}
    </div>
  );
}