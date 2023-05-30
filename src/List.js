import React, {useState} from 'react';
import {Button, Form, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = () => {
    const [name, setName] = useState([]);
    const [input, setInput] = useState('');
    const [date, setDate] = useState('');
    const [text, setText] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    const textAreaHandler = (event) => {
        setText(event.target.value);
    }

    const addNameHandler = () =>{
        if(input.trim() !== ''){ 
            const person ={
                name: input,
                date:date,
                text:text,
            }
            setName([...name, person]);
            setInput('');
            setDate('');
            setText('');
        }
    };

  

  return (
    <div className='container'>
    <Form>
        <Form.Group>
        <Form.Label variant='secondary'><h3>Enter Name Details Below</h3></Form.Label>
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
        <div className='mt-2'>
        <Form.Control
        as='textarea'
        variant='primary'
        value={text}
         onChange={textAreaHandler}
         placeholder='We Like to here Something about you...!!!'
     
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
                 <h5>Name:</h5>{name.name} <br/>

                 <br/> <h5>DOB:</h5> {name.date}<br/> <br/>
                 <h5>About:</h5>{name.text}
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