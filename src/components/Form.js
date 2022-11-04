const Form = ({
  name,
  email,
  password1,
  password2,
  errorMessage,
  handleEmailChange,
  handleNameChange,
  handlePassword1Change,
  handlePassword2hange,
  handleSubmit,
  close1,
  setClose1,
  close2,
  setClose2,
}) => {
  return (
    <form className="form-conteiner" onSubmit={handleSubmit}>
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

      <div className="eyeclosed">
        <input
          className="password"
          type={close1 === true ? "text" : "password"}
          placeholder="JFeWdr4/e32"
          value={password1}
          name="password1"
          onChange={handlePassword1Change}
          style={{ borderColor: errorMessage ? "red" : "black" }}
        ></input>
        <div className="eye">
          <i
            onClick={() => {
              setClose1(!close1);
            }}
            className={
              close1 === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
          ></i>
        </div>
      </div>
      <span className="titre">Confirm your Password</span>
      <div className="eyeclosed">
        <input
          type={close2 === true ? "text" : "password"}
          className="password"
          placeholder="JFeWdr4/e32"
          value={password2}
          name="password2"
          style={{ borderColor: errorMessage ? "red" : "black" }}
          onChange={handlePassword2hange}
        ></input>
        <div className="eye">
          <i
            onClick={() => {
              setClose2(!close2);
            }}
            className={
              close2 === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
          ></i>
        </div>
      </div>
      <input className="button" type="submit" value="Register"></input>

      <span className="error" style={{ color: "red" }}>
        {errorMessage && "Passwords are not the same"}
      </span>
    </form>
  );
};

export default Form;
