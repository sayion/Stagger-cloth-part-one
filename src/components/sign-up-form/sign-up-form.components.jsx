import { useState, useContext } from "react";
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
      <center>
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "40px",
            fontFamily: "sans-serif",
          }}
        >
          Don't have an account ?
        </h2>
      </center>
      <center>
        <h2 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
          Sign Up with Email and Password
        </h2>
      </center>
      <form onSubmit={handleSubmit}>
        <FormInput
          style={{
            borderRadius: "6px",
            borderBottom: "2px solid red",
          }}
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>

        <FormInput
          style={{
            borderRadius: "6px",
            borderBottom: "2px solid red",
          }}
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          style={{
            borderRadius: "6px",
            borderBottom: "2px solid red",
          }}
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          style={{
            borderRadius: "6px",
            borderBottom: "2px solid red",
          }}
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <center>
          <Button
            style={{
              fontFamily: "Helvetica",
              fontSize: "14px",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Sign Up
          </Button>
        </center>
      </form>
    </div>
  );
};
export default SignUpForm;
