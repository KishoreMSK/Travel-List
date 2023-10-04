import { useState } from "react";
import Item from "./Item";

export default function PackingList({items , handleDelete , handlePackedItem, handleClearList}){
    const [sortBy, setSortBy] = useState("input")
    let sortedItems;
    if(sortBy === "input")
      sortedItems = items
    
    if(sortBy === "description"){
        sortedItems = items?.slice().sort((a,b) => 
        a.description.localeCompare(b.description)
        )  //localecompare is used to sort the string
    }

    if(sortBy === "packed"){
        console.log("inpacked");
        sortedItems = items.slice().sort((a,b) => 
        Number(a.packed) - Number(b.packed)
        )
    }

    return(
        <div className="list">
            <li>
            {
            sortedItems.map(item => 
                <Item item={item} key={item.id} 
                handleDelete={handleDelete}
                handlePackedItem={handlePackedItem}
            />
            )}
            </li>
            <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
            {items.length > 0 && <button onClick={handleClearList}>Clear List</button>}
            </div>
        </div>
    )
}