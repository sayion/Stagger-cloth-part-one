import { useState } from "react";
import FormInput from "../form-input/form-input.components";
import Button from "../button/button.components";
import " C:/Users/sayiondebnath/Desktop/crown-clothing/src/components/Sign-In-form/sign-in-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentsFromAuth,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();
    } catch (error) {}
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <h3>Sign Up with Email and Password</h3>
      <form onSubmit={handleSubmit}>
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

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};
export default SignInForm;
