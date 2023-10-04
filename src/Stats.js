export default function Stats({ items }) {
    const totalItems = items?.length;
    let packedItems = 0;
    items?.filter(item => item.packed ? packedItems++ : null);
    const percent = Number((packedItems * 100) / totalItems);
    return (
        <footer className="stats">
            <em>You have {totalItems} items on your list and you have already packed {percent}%</em>
        </footer>
    );
}