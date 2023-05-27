import {useState} from 'react';
interface Props {
  items  : string[],
  heading : string
}

const ListGroup = ({items,heading}:Props) => {

  const [selectIndex,setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>{heading}</h1>
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