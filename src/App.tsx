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
   const handleSelectItem = (item:string) =>{
      console.log(item)
   }
 return (
  <>
  <ListGroup items={items} heading="Places" onSelectItem={handleSelectItem} />
  </>
 )
}

export default App

