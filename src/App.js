import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.components.jsx";

import SignIn from "./routes/home/sign-in/sign-in.components.jsx";
import Navigation from "./routes/home/Navigation/navigation.components.jsx";
import Shop from "./routes/home/shop/shop.components";
import Checkout from "./routes/checkout/checkout.component.jsx";
import Contact from "./components/Contact/contact.components.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/Shop/*" element={<Shop></Shop>}></Route>
        <Route path="signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/AboutUs" element={<Contact></Contact>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  );
};
export default App;
