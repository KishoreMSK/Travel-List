import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Pants", quantity: 6, packed: true },
// ];

export default function App() {
    const [items, setItems] = useState([]);

    function addItems(newItems) {
        setItems(prevItem => [...prevItem, newItems]);
    }
    function handleDelete(id) {
        setItems(prevItem => prevItem.filter(item => item.id !== id));
    }
    function handlePackedItem(id) {
        setItems(items => items.map(item => item.id === id ? {
            ...item,
            packed: !item.packed
        } : item)
        );
    }
    function handleClearList() {
        alert("Are u sure u want to delete all the items from list");
        setItems([]);
    }
    return (
        <div className="app">
            <Logo />
            <Form onAddItems={addItems} />
            <PackingList items={items} handleDelete={handleDelete}
                handlePackedItem={handlePackedItem} handleClearList={handleClearList} />
            <Stats items={items} />
        </div>
    );

}
