import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { delete_person, edit_person } from "../redux/Action/personAction";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const PersonCard = ({ el }) => {
  const [name, setName] = useState(el.name);
  const [age, setAge] = useState(el.age);
  const [favfood, setFavfood] = useState(el.favfood);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit_person(el._id, { name, age, favfood }));
    handleClose();
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          {el.favfood.map((element) => (
            <Card.Text>{element} </Card.Text>
          ))}
          <Button variant="primary">{el.age}</Button>
          <Button
            variant="danger"
            onClick={() => dispatch(delete_person(el._id))}
          >
            delete
          </Button>
          <Button variant="warning" onClick={handleShow}>
            EDIT
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="warning " onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonCard;
