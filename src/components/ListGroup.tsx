import {MouseEvent} from 'react';

const ListGroup = () => {
 const items = [
  'NewYork',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia'
 ]  
 const handleClick = (event:MouseEvent) => {
  const target = event.target as HTMLLIElement;
    console.log(target.textContent);
 }
  return (
    <>
      <h1>List Group</h1>
      { items.length!==0 &&
       <ul className="list-group">
        {
          items.map((item, index) => {
           return (
            <li key={index} onClick={handleClick} className='list-group-items'>{item}</li>
           )
        })
       }
      </ul>
      }
      {
       items.length === 0 && <h3>No items found</h3>
      }
    </>
  );
};

export default ListGroup;
