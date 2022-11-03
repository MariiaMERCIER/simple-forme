import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [validation, setValidation] = useState("");

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
      alert("Vos deux mots de passes ne sont pas indetiques!");
    }
  };

  return (
    <div className="App">
      <h1>Create un account</h1>
      <form className="form-conteiner" onSubmit={handleSubmit}>
        <p>Name</p>

        <input
          type="text"
          placeholder="John"
          value={name}
          name="name"
          onChange={handleNameChange}
        ></input>
        <p>Email</p>
        <input
          type="email"
          placeholder="John@mail.com"
          value={email}
          name="email"
          onChange={handleEmailChange}
        ></input>
        <p>Password</p>
        <input
          type="password"
          placeholder="JFeWdr4/e32"
          value={password1}
          name="password1"
          onChange={handlePassword1Change}
        ></input>
        <p>Confirm your Password</p>
        <input
          type="password"
          placeholder="JFeWdr4/e32"
          value={password2}
          name="password2"
          onChange={handlePassword2hange}
        ></input>
        <input type="submit" value="Register"></input>
        {/* {password1 === password2 ? { display: "none" } : { display: "block" }} */}
      </form>
    </div>
  );
};

export default App;
