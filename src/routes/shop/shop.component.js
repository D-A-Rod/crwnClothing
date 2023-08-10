// import { CategoriesContext } from "../../components/context/categories.context";
// import { useContext } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";

const Shop = () => {
  //const { categoriesMap } = useContext(CategoriesContext);

  return (
  <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
  </Routes>
  );
};

export default Shop;
