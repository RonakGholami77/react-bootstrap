import { Button, Form } from "react-bootstrap";

function LeftSide() {
  return (
    <Form className="form">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="success" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LeftSide;
