import React, {useEffect, useState} from "react";
import { Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function List () {
  const[todo, setTodo] = useState('');
  const[todos, setTodos] = useState([]);

  const hanldeChange = (evt) => setTodo(evt.target.value)
  const handleClick = () => {
        setTodos(prev => [...prev, todo])
        setTodo('')
        }

        const handleFilter = (idx) => () => {
            setTodos(todos.filter((_, todoIdx) => todoIdx !== idx))
            }

  return(
      <div className="text-center">
            <h1>To Do List!</h1>
            <input onChange={hanldeChange} value={todo} />
            <Button variant="primary" onClick={handleClick}>Add</Button>
            <Stack>
              <div className="p-2">
                {todos.map((data, idx) => <li key={`${data}-${idx}`}>{data}<button onClick={handleFilter(idx)}>X</button></li>)}
              </div>
            </Stack>
          
      </div>
  );


}



