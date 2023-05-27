import {useState} from 'react';

const ListGroup = () => {
 const items = [
  'NewYork',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia'
 ]  
  const [selectIndex,setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>List Group</h1>
      { items.length!==0 &&
       <ul className="list-group">
        {
          items.map((item, index) => {
           return (
            <li key={index} 
            onClick={()=>setSelectedIndex(index)} 
            className={selectIndex===index?'list-group-item active':'list-group-items'}>{item}
            </li>
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
