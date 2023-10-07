import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../components/context/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.components";
import Footer from "../home/Footer.components";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={products}
            ></CategoryPreview>
          );
        })}
      </Fragment>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  );
};

export default CategoriesPreview;
