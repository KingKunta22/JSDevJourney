function List(){

    const fruits = [
        {id: 1, name: 'apple', calories: 51}, 
        {id: 2, name: 'mango', calories: 60}, 
        {id: 3, name: 'watermelon', calories: 105}, 
        {id: 4, name: 'peach', calories: 45}, 
        {id: 5, name: 'strawberry', calories: 67}
    ]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSED ALPHAB ORDER
    // fruits.sort((a, b) => a.calories - b.calories) // NUMERIC ORDER
    fruits.sort((a, b) => b.calories - a.calories) // REVERSE NUMERIC ORDER

    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b>
        </li>)

    return(<ol>{listItems}</ol>)
}

export default List