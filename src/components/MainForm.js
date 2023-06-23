import { useState } from "react";
import FormInput from "./FormInput";
import Trial from "./Trial";

export default function MainForm({ proceed, setProceed }) {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmit(true);

    if (
      !userName ||
      !userLastName ||
      !email ||
      !password ||
      !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    )
      return;

    setProceed(true);
  }

  return (
    <div className="main-form">
      <Trial />
      <form onSubmit={handleSubmit} className="form-inputs">
        <FormInput
          userValue={userName}
          setValue={setUserName}
          type="text"
          placeholder="First Name"
          errorMessage="Must provide a name!"
          errorState={formSubmit && !userName ? true : false}
        />
        <FormInput
          userValue={userLastName}
          setValue={setUserLastName}
          type="text"
          placeholder="Last Name"
          errorMessage="Must provide a last name!"
          errorState={formSubmit && !userLastName ? true : false}
        />
        <FormInput
          userValue={email}
          setValue={setEmail}
          type="text"
          placeholder="Email Address"
          errorMessage="Must provide a valid email!"
          errorState={
            formSubmit && (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
              ? true
              : false
          }
        />
        <FormInput
          userValue={password}
          setValue={setPassword}
          type="password"
          placeholder="Password"
          errorMessage="Must provide a password!"
          errorState={formSubmit && !password ? true : false}
        />
        <button>Claim your free trial</button>
        <p className="form-footer">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
