import React, {useEffect, useState} from "react";
import { ListGroupItem } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List () {
  const[todo, setTodo] = useState('');
  const[todos, setTodos] = useState([]);

  const hanldeChange = (evt) => setTodo(evt.target.value)
  
  let items = todos.length;
    
  // Add item
  const handleClick = () => {
    if(input.value === ''){
      alert("Missing Data")
    }else {
    setTodos(prev => [...prev, todo])
    setTodo('')
    }
    }
        
    // Delete action & alert message for delete task
      const handleFilter = (idx) => () => {
      alert ("Did you complete this Task?")
     setTodos(todos.filter((_, todoIdx) => todoIdx !== idx))
   }
            
           

  return(
      <div className="justify-content-center">
            <h1 id="tittle">To Do List!</h1>
            <input id="input" onChange={hanldeChange} value={todo} />
            <Button variant="primary" id="addBtn" onClick={handleClick}>Add</Button>
            <ListGroup>
              <div>
                {todos.map((data, idx) => <ListGroup.Item key={`${data}-${idx}`}>{data}<CloseButton id="closeBtn" onClick={handleFilter(idx)} /></ListGroup.Item>)}
              </div>
              <div id="itemsQuantity">
                <p>{items +" item left"}</p>
              </div>
            </ListGroup>
          
      </div>
  );
}



