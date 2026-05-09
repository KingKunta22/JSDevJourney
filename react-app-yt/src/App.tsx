// import Message from './Message';
import ListGroup from "./components/ListGroup";

function App() {

  let items = ["Cebu", "Makati", "Metro Manila", "Davao", "Naga"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
