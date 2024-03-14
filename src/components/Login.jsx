import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const dummyCredential = {
  username: "sample_1",
  password: "sample123",
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCredential, setValidCredential] = useState(false);
  const isValidUser = JSON.parse(localStorage.getItem("isValidUser"));

  useEffect(() => {
    if (isValidUser) {
      navigate("/", { replace: true });
    }
  }, []);

  const validateUser = () => {
    if (
      username === dummyCredential.username &&
      password === dummyCredential.password
    ) {
      localStorage.setItem("isValidUser", true);
      navigate("/", { replace: true });
      setValidCredential(false);
    } else {
      setValidCredential(true);
    }
  };

  const onSubmitLoginForm = (e) => {
    e.preventDefault();
    validateUser();
    setUserName("");
    setPassword("");
  };

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
    setValidCredential(false);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setValidCredential(false);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Form
        className="p-3 border border-2 border-dark rounded shadow custom-form-width"
        onSubmit={onSubmitLoginForm}
      >
        <h1 className="text-center mb-3">Login</h1>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={onChangeUsername}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </Form.Group>
        {isValidCredential && (
          <p className="text-danger mt-2">
            *Username or Password not matching...
          </p>
        )}
        <div className="text-center">
          <button type="submit" className="btn btn-outline-dark">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
