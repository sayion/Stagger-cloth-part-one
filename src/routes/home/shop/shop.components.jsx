import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../categories-preview/categories-preview.components";
import Category from "../../category/category.components";
import "./shop.styles.scss";
// import Footer from "../Footer.components";

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
        <Route path=":category" element={<Category />}></Route>
      </Routes>
      <br></br>
      <br></br>
    </>
  );
};

export default Shop;
