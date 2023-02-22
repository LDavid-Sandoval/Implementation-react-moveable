import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import ComponentMoveable from "./Components/ComponentMoveable/ContainerMoveable";
import ComponentHeader from "./Components/ComponentHeader/ContainerHeader";
import { fitType, randomNumber } from './utils/const'

function App() {
  const [item, setItem] = useState([{ id: uuid() }]);

  const addItem = () => {
    setItem([...item, { id: uuid(), fitType: fitType[randomNumber(0, 12)] }]);
  };

  const removeItem = (id) => {
    const objWithIdIndex = item.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
      item.splice(objWithIdIndex, 1);
    }
    setItem([...item]);
  };


  return (
    <div className='App'>
      <ComponentHeader addItem={addItem} />
      {item.length > 0 &&
        item.map((item) => {
          return (
            <ComponentMoveable
              key={item.id}
              id={item.id}
              removeItem={removeItem}
              fitType={item.fitType}
            />
          );
        })}
    </div>
  );
}

export default App;
