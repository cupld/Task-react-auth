import React from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import authStore from "../stores/authStore";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { observer } from "mobx-react"

function Navbar() {
  return (
    <Nav className="justify-content-end" bg="light" expand="lg">
      {authStore.user ? authStore.user.username : ""}
      {authStore.user ? (
        <>
    <button className="delete" onClick={authStore.logout}>Log Out</button>
    </>
      ) : ( 
        <>
      <SignInModal />
      <SignUpModal />
      </>
      )}
    </Nav>
  );
}

export default observer(Navbar);
