// import Header from './Header.jsx'
// import Food from './Food.jsx'
// import Footer from './Footer.jsx'
// import Card from './Card.jsx'
import Student from './Student.jsx'

function App() {
  
  return(
    <>
      <Student name="Leo" age={25} isStudent={true}/>
      <Student name="Inferior" age={30} isStudent={false}/>
      <Student name="Leon" age={12} isStudent={false}/>
    </>
  )

}

export default App
