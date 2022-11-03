const StepTwo = ({ name, email, password1, handleSubmit, setValidation }) => {
  return (
    <form onSubmit={handleSubmit} className="stepTwo">
      <div className="recap">
        <p>Name: {name} </p>
        <p>Email: {email}</p>
        <p>Password: {password1}</p>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={() => {
            setValidation(false);
          }}
        >
          Edit your information
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
