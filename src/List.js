import React, { useState, useEffect } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import Image from "./images/WIN_20230327_18_18_28_Pro.jpg";
import { Accordion } from "react-bootstrap";
import Trash from "./images/trash.svg";
import { BsTrash3, BsXLg } from "react-icons/bs";
import uuid4 from "uuid4";

const List = () => {
  const [persons, setPersons] = useState([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [item, setItem] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const textAreaHandler = (event) => {
    setText(event.target.value);
  };

  const addNameHandler = () => {
    if (input.trim() !== "") {
      const person = {
        name: input,
        date: date,
        text: text,
        id: uuid4(),
        done: false,
      };
      const newName = [...persons, person];
      updatePersonsData(newName);
      setInput("");
      setDate("");
      setText("");
    }
  };

  const updatePersonsData = (newName) => {
    localStorage.setItem("persons", JSON.stringify(newName));
    setPersons(newName);
  };
 

  useEffect(() => {
    const newName = localStorage.getItem("persons");
    if (newName) {
      setPersons(JSON.parse(newName));
    }
  }, []);

  const deleteOne = ({ id }) => {
    updatePersonsData(persons.filter((person) => person.id != id));
  };

  const clearAllData = () => {
    updatePersonsData([]);
  };




  return (
    <div className="container">
      <Form>
        <Form.Group>
          <Form.Label variant="secondary">
            <h3>Enter Name Details Below</h3>
          </Form.Label>
          <Form.Control
            type="text"
            variant="primary"
            value={input}
            onChange={inputHandler}
            placeholder="Enter a Name"
          ></Form.Control>
          <div className="mt-2">
            <Form.Control
              type="date"
              variant="primary"
              value={date}
              onChange={dateHandler}
            ></Form.Control>
          </div>
          <div className="mt-2">
            <Form.Control
              as="textarea"
              variant="primary"
              value={text}
              onChange={textAreaHandler}
              placeholder="We Like to here Something about you...!!!"
            ></Form.Control>
          </div>

          <div className="mt-3">
            <Button variant="primary" onClick={addNameHandler}>
              Add Name
            </Button>

            <div>
              <ListGroup className="mt-3">
                <div className="flex flex-row">
                  {persons.length > 0 && (
                    <Button onClick={clearAllData}>
                      Clear All {""} (<BsXLg />)
                    </Button>
                  )}
                </div>

                {persons.map((person, index) => (
                  <div className="flex flex-row">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <div className="flex flex-row">
                          <Accordion.Header key={index}>
                            <div>
                              <h5>
                                {person.name}{" "}
                                <BsTrash3
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    deleteOne(person);
                                  }}
                                />
                              </h5>
                            </div>
                          </Accordion.Header>
                        </div>

                        <Accordion.Body>
                          <Card className="bg-dark text-white mt-3">
                            <Card.Body>
                              <ListGroup.Item key={index}>
                                <h5>DOB:</h5> {person.date}
                                <br /> <br />
                                <h5>About:</h5>
                                {person.text}
                              </ListGroup.Item>
                            </Card.Body>
                          </Card>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                ))}
              </ListGroup>
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default List;
