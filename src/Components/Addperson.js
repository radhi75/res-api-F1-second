import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_person } from "../redux/Action/personAction";
const Addperson = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [favfood, setFavfood] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_person({ name, age, favfood }), navigate("/"));
  };
  return (
    <div>
      <Card style={{ width: "500px", left: "35%" }}>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>age</Form.Label>
              <Form.Control
                type="Number"
                placeholder="age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>favorit food</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your favorite food"
                onChange={(e) => setFavfood(e.target.value)}
                value={favfood}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Addperson;
