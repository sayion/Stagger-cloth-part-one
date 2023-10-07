import Directory from "../../components/directory/directory.component.jsx";
import { Outlet } from "react-router-dom";
import Main from "./main.components.jsx";
import Footer from "./Footer.components.jsx";
function Home() {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: ".JACKETS.",
      imageUrl:
        "https://images.pexels.com/photos/17574583/pexels-photo-17574583/free-photo-of-man-with-sunglasses-and-woman-in-jacket-posing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: ".SNEAKERS.",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: ".WOMENS.",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: ".MENS.",
      imageUrl:
        "   https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div>
      <Outlet></Outlet>
      <Main></Main>
      <Directory categories={categories}></Directory>
      <Footer></Footer>
    </div>
  );
}
export default Home;
