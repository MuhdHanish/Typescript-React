import ListGroup from "./components/ListGroup"


const App = () =>{
  const items = [
    'NewYork',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia'
   ]
 return (
  <>
  <ListGroup items={items} heading="Places" />
  </>
 )
}

export default App

