function List(){

    const fruits = [
        {id: 1, name: 'apple', calories: 51}, 
        {id: 2, name: 'mango', calories: 60}, 
        {id: 3, name: 'watermelon', calories: 105}, 
        {id: 4, name: 'peach', calories: 45}, 
        {id: 5, name: 'strawberry', calories: 67}
    ]
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>)

    return(<ol>{listItems}</ol>)
}

export default List