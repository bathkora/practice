import React, {useState} from 'react';
import {Button, Form, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = () => {
    const [name, setName] = useState([]);
    const [input, setInput] = useState('');
    const [date, setDate] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const addNameHandler = () =>{
        if(input.trim() !== ''){ 
            const person ={
                name: input,
                date:date,
            }
            setName([...name, person]);
            setInput('');
            setDate('');
        }
    };

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

  return (
    <div className='container'>
    <Form>
        <Form.Group>
        <Form.Label variant='secondary'>Enter Name</Form.Label>
        <Form.Control
        type='text'
        variant='primary'
        value={input}
        onChange={inputHandler} 
        placeholder='Enter a Name' 
        ></Form.Control>
        <div className='mt-2'>
        <Form.Control
        type='date'
        variant='primary'
        value={date}
         onChange={dateHandler}
     
        ></Form.Control> 
        </div>
      

        <div className='mt-3'>
        <Button 
        variant='primary'
        onClick={addNameHandler}
        >Add Name</Button>
        <ListGroup className='mt-3'>
        {name.map((name, index) => (
                <ListGroup.Item key={index}>
                  {name.name} - {name.date}
                </ListGroup.Item>
              ))}
        </ListGroup>
       
        </div>
       
        </Form.Group>
    </Form>
      
    </div>
  );
}

export default List;