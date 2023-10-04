import { useState } from "react"
export default function Form({onAddItems}){
    
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
    function handleSubmit(e){
        e.preventDefault()
        const newItems = {
            description: description,
            quantity: quantity,
            id: Date.now(),
            packed: false 
        }
        onAddItems(newItems)
    }
    
    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <p>What do u need for the trip</p>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20}, (_,index) => index + 1)
                .map((num) => (<option key={num} value={num}>{num}</option>))}
            </select>
            <input type="text" placeholder="item.." value={description} 
            onChange={(e) => setDescription(e.target.value)}></input>
            <button>Add</button>
        </form>
    )
}