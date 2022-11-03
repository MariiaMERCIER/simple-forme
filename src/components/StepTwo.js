const StepTwo = ({ name, email, password1, handleSubmit, validation }) => {
  return (
    <form
      className="stepTwo"
      onSubmit={handleSubmit}
      style={validation === true ? { display: "flex" } : { display: "none" }}
    >
      <div className="recap">
        <p>Name: {name} </p>
        <p>Email: {email}</p>
        <p>Password: {password1}</p>
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="Edit your information"
        ></input>
      </div>
    </form>
  );
};

export default StepTwo;
