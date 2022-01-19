import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import roomStore from "../stores/roomStore";
import authStore from "../stores/authStore";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username:"",
    password:"",
  });
  const handleChange = (event) =>{
    setUser({...user, [event.target.name]: event.target.value});
  };
  const handleSubmit = (event) => {
    // to do : stop page from refreshing
    event.preventDefault();
    // call a function to sign up
    authStore.signUp(user);

    setIsOpen(false);
  };

  return (
    <>
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign Up
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
      
              <input 
              type="text"
              onChange={handleChange}
              name="username"
              value={user.username}
              placeholder="enter your username"
              />

              <input 
              type="password"
              onChange={handleChange}
              name="password"
              value={user.password}
              placeholder="enter your password"
              />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpModal;
