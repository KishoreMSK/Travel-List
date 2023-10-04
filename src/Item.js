
export default function Item({item , handleDelete, handlePackedItem}){
    const styles = {
        textDecoration: item.packed ? "line-through" : "none"
    }
    function handleOnChange(){
        console.log("checked")
        handlePackedItem(item.id)
    }
    return (
      <>
        <input type="checkbox" 
         value={item.packed}
         checked={item.packed}
         onChange={handleOnChange}
         />
        <li>
          <span style={styles}>
            {item.quantity} {item.description}
          </span>
          <button onClick={() => handleDelete(item.id)}>❌</button>
        </li>
      </>
    );
}