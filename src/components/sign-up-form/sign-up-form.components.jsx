import { useState } from "react";
import FormInput from "../form-input/form-input.components";
import Button from "../button/button.components";
import "C:/Users/sayion debnath/Desktop/crown-clothing/src/components/sign-up-form/sign-u-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentsFromAuth,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentsFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Create User as The Email Already Exists!");
      } else {
        console.log("user creation deviated by errror");
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Dont have an account</h2>
      <h3>Sign Up with Email and Password</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
