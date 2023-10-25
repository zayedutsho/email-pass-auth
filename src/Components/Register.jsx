import { useState } from "react";

const Register = () => {
  const [mail, setMail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);

    setMail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div>
      <h1>this is register</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
        />
        <br />
        <input
          onBlur={handlePassword}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
