import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import Stats from "./Components/Stats";
import PackingList from "./Components/PackingList";

import "./index.css";
// const initialItems = [
//   { id: 1, description: "passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Shoes", quantity: 2, packed: false },
//   { id: 4, description: "charger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]); //we are lift up the state
  //whenver multiple siling components need access to the same state .we move up this state to first common parent
  function handleAddItems(item) {
    // setItems(items=> items.push(item))
    //It is not allowed in react .React is all about Immutability.
    setItems((items) => [...items, item]); //Using spread without mutating
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        clearAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
