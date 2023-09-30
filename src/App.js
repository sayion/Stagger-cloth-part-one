import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.components.jsx";
import Say from "./routes/home/say.components";
import SignIn from "./routes/home/sign-in/sign-in.components.jsx";
import Navigation from "./routes/home/Navigation/navigation.components.jsx";
import Shop from "./routes/home/shop/shop.components";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/Shop" element={<Shop></Shop>}></Route>
        <Route path="signIn" element={<SignIn></SignIn>}></Route>
        <Route path="Say" element={<Say></Say>}></Route>
      </Route>
    </Routes>
  );
};
export default App;
