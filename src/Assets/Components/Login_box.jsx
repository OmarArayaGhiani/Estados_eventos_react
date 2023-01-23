import { useState } from "react";
import LoginMessage from "./Login_message";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const LoginBox = (props) => {
  const { text } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const getInto = (event) => {
    event.preventDefault();
    if (userName == "ADL" && password == 252525) {
      setAlertType("success");
      setAlertMessage("Sesión iniciada correctamente");
    } else {
      setAlertType("danger");
      setAlertMessage("Usuario o contraseña inválidos");
    }
  };

  return (
    <div className="text-center loginBox">
      <FontAwesomeIcon icon={faCircleUser} className="userIcon" />
      <h1>Bienvenido</h1>
      <Form onSubmit={getInto} className="my-3">
        <Form.Group className="mb-3 d-flex align-items-center" controlId="User">
          <FontAwesomeIcon icon={faUser} className="fs-5 me-2 iconPlaceholder" />
          <Form.Control
            type="text"
            placeholder="Usuario"
            onChange={(userName) => setUserName(userName.target.value)}
            className="ps-5"
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex align-items-center" controlId="Password">
          <FontAwesomeIcon icon={faLock} className="fs-5 me-2 iconPlaceholder" />
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(password) => setPassword(password.target.value)}
            className="ps-5"
          />
        </Form.Group>
        <Button type="submit" disabled={userName === "" || password === ""}>
          {text}
        </Button>
      </Form>
      {alertType ? (
        <LoginMessage login={alertType} text={alertMessage} />
      ) : null}
    </div>
  );
};

export default LoginBox;
