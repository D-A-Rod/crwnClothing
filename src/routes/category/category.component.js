import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategiesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategiesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  // console.log("render/re-render category component");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync);
  }, [dispatch]);

  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
