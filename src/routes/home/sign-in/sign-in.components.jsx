import { signInWithGooglePopup } from "C:/Users/sayion debnath/Desktop/crown-clothing/src/utils/firebase/firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>
        <center>SignIn In Page</center>
      </h1>
      <center>
        <button onClick={logGoogleUser}>Sign In with Google Auth</button>
      </center>
    </div>
  );
};
export default SignIn;
