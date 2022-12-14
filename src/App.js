import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [validation, setValidation] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [close1, setClose1] = useState(false);
  const [close2, setClose2] = useState(false);

  // const [verification, setVerification] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePassword1Change = (event) => {
    const value = event.target.value;
    setPassword1(value);
  };
  const handlePassword2hange = (event) => {
    const value = event.target.value;
    setPassword2(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password1 !== password2) {
      setErrorMessage(true);
      setValidation(false);
    } else {
      setValidation(true);
    }
  };

  return (
    <>
      <div className="app">
        <h1>{validation === false ? "Create an account" : "Results"}</h1>
        {validation === false ? (
          <Form
            name={name}
            email={email}
            password1={password1}
            password2={password2}
            validation={setValidation}
            errorMessage={errorMessage}
            handleEmailChange={handleEmailChange}
            handleNameChange={handleNameChange}
            handlePassword1Change={handlePassword1Change}
            handlePassword2hange={handlePassword2hange}
            handleSubmit={handleSubmit}
            close1={close1}
            setClose1={setClose1}
            close2={close2}
            setClose2={setClose2}
          />
        ) : (
          <StepTwo
            name={name}
            email={email}
            password1={password1}
            handleSubmit={handleSubmit}
            setValidation={setValidation}
          />
        )}
      </div>

      <Footer />
    </>
  );
};

export default App;
