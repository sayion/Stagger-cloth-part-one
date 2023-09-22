import SignUpForm from "../../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../../components/Sign-In-form/sign-in-form.components";
import "./sign-in.styles.scss";
const SignIn = () => {
  return (
    <div className="sign-in-conatiner">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};
export default SignIn;
