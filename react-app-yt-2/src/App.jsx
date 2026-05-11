// import Header from './Header.jsx'
// import Food from './Food.jsx'
// import Footer from './Footer.jsx'
// import Card from './Card.jsx'
// import Student from './Student.jsx'
// import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {
  
    const fruits = [
        {id: 1, name: 'apple', calories: 51}, 
        {id: 2, name: 'mango', calories: 60}, 
        {id: 3, name: 'watermelon', calories: 105}, 
        {id: 4, name: 'peach', calories: 45}, 
        {id: 5, name: 'strawberry', calories: 67}
    ]

    const vegetables = [
        {id: 1, name: 'carrots', calories: 8}, 
        {id: 2, name: 'cabbage', calories: 5}, 
        {id: 3, name: 'tomatoes', calories: 10}, 
        {id: 4, name: 'squash', calories: 4}, 
        {id: 5, name: 'broccoli', calories: 6}
    ]

  return(
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
    </>
  )

}

export default App
