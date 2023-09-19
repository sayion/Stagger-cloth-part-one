import { signInWithGooglePopup } from "C:/Users/sayion debnath/Desktop/crown-clothing/src/utils/firebase/firebase.utils.js";
import { createUserDocumentsFromAuth } from "C:/Users/sayion debnath/Desktop/crown-clothing/src/utils/firebase/firebase.utils.js";
import SignUpForm from "../../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../../components/Sign-In-form/sign-in-form.components";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentsFromAuth(user);
  };

  return (
    <div>
      <h1>
        <center>SignIn In Page</center>
      </h1>

      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};
export default SignIn;
