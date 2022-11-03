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
    if (password1 !== password2 && !password1 && !password2) {
      setValidation(false);
      alert("Vos deux mots de passes ne sont pas indetiques!");
    } else {
      setValidation(true);
    }
    event.preventDefault();
  };

  return (
    <>
      <div className="app">
        <h1>{validation === false ? "Create un account" : "Results"}</h1>

        <Form
          name={name}
          email={email}
          password1={password1}
          password2={password2}
          validation={validation}
          handleEmailChange={handleEmailChange}
          handleNameChange={handleNameChange}
          handlePassword1Change={handlePassword1Change}
          handlePassword2hange={handlePassword2hange}
          handleSubmit={handleSubmit}
        />
        <StepTwo
          name={name}
          email={email}
          password1={password1}
          handleSubmit={handleSubmit}
          validation={validation}
        />
      </div>

      <Footer />
    </>
  );
};

export default App;
