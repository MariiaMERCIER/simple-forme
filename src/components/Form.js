const Form = ({
  name,
  email,
  password1,
  password2,
  validation,
  handleEmailChange,
  handleNameChange,
  handlePassword1Change,
  handlePassword2hange,
  handleSubmit,
}) => {
  return (
    <form
      className="form-conteiner"
      onSubmit={handleSubmit}
      style={validation === false ? { display: "flex" } : { display: "none" }}
    >
      <span className="titre">Name</span>

      <input
        type="text"
        placeholder="John"
        value={name}
        name="name"
        onChange={handleNameChange}
      ></input>
      <span className="titre">Email</span>
      <input
        type="email"
        placeholder="John@mail.com"
        value={email}
        name="email"
        onChange={handleEmailChange}
      ></input>
      <span className="titre">Password</span>
      <input
        type="password"
        placeholder="JFeWdr4/e32"
        value={password1}
        name="password1"
        onChange={handlePassword1Change}
      ></input>
      <span className="titre">Confirm your Password</span>
      <input
        type="password"
        placeholder="JFeWdr4/e32"
        value={password2}
        name="password2"
        onChange={handlePassword2hange}
      ></input>
      <input className="button" type="submit" value="Register"></input>
      {/* {password1 === password2 ? { display: "none" } : { display: "block" }} */}
    </form>
  );
};

export default Form;
