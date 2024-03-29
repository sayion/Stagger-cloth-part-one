import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.components";
import Button from "../button/button.components";
import "./sign-in-form.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentsFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentsFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Password Input");
      }
      alert("Incorrect Password or User Input");
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <center>
        <h2
          style={{
            color: "black",

            fontSize: "28px",
            color: "black",
            marginBottom: "30px",
            fontFamily: "sans-serif",
          }}
        >
          Already have an account !
        </h2>
      </center>

      <center>
        <h3
          style={{ color: "black", fontFamily: "sans-serif", fontSize: "20px" }}
        >
          Sign Up with Email and Password
        </h3>
      </center>
      <form onSubmit={handleSubmit}>
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

        <div className="button-conatiner">
          <Button
            style={{
              fontFamily: "Helvetica",
              fontSize: "14px",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Sign In
          </Button>
          <Button
            style={{
              fontFamily: "Helvetica",
              fontSize: "14px",
              borderRadius: "10px",
              background:
                "   linear-gradient(90deg, #0149FF 15%, #100280 100%)z",
            }}
            type="button"
            buttonType="google-sign-in"
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
