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
  close,
  setClose,
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
          type="password"
          placeholder="JFeWdr4/e32"
          value={password1}
          name="password1"
          onChange={handlePassword1Change}
          style={{ borderColor: errorMessage ? "red" : "black" }}
        ></input>
        <div className="eye">
          <i
            onClick={() => {
              setClose(!close);
            }}
            className={
              close === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
          ></i>
        </div>
      </div>
      <span className="titre">Confirm your Password</span>
      <div className="eyeclosed">
        <input
          type={close === true ? "text" : "password"}
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
              setClose(!close);
            }}
            className={
              close === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
          ></i>
        </div>
      </div>
      <input className="button" type="submit" value="Register"></input>

      <span className="error" style={{ color: "red" }}>
        {errorMessage && "Les mots de passes ne sont pas indetiques"}
      </span>
    </form>
  );
};

export default Form;
