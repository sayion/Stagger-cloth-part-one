import SignUpForm from "../../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../../components/Sign-In-form/sign-in-form.components";
import "./sign-in.styles.scss";
import Footer from "C:/Users/sayion debnath/Desktop/crown-clothing/src/routes/home/Footer.components.jsx";
const SignIn = () => {
  return (
    <>
      <div className="sign-in-conatiner">
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
      </div>
      <Footer></Footer>
    </>
  );
};
export default SignIn;
