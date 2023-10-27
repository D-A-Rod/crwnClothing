// import "./category.styles.scss";
// import { useParams } from "react-router-dom";
// import { useState, useEffect, Fragment } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProductCard from "../../components/product-card/product-card.component";
// import {
//   selectCategiesMap,
//   selectCategoriesIsLoading,
// } from "../../store/categories/category.selector";
// import Spinner from "../../components/spinner/spinner.component";
// import { fetchCategoriesAsync } from "../../store/categories/category.action";

// const Category = () => {
//   const { category } = useParams();
//   console.log( "this is category from useParams", category );
//   const categoriesMap = useSelector(selectCategiesMap);
//   console.log( "this is categoriesMap", categoriesMap );
//   // const isLoading = useSelector(selectCategoriesIsLoading);
//   const [products, setProducts] = useState(categoriesMap[category]);
//   console.log( "this is category from useState", category );
//   // console.log("render/re-render category component");

//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchCategoriesAsync());
//   // }, [dispatch]);

//   useEffect(() => {
//     console.log("effect fired calling setProducts");
//     setProducts(categoriesMap[category]);
//     console.log("this is set Products", setProducts);
//     console.log( "this is category from useEffect", category );
//   }, [category, categoriesMap]);

//   return (
//     <Fragment>
//       <h2 className="category-title">{category.toUpperCase()}</h2>
//       <div className="category-container">
//         {products &&
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </div>
//     </Fragment>
//   );
// };

// export default Category;



///////////////
// import "./category.styles.scss";
// import { useParams } from "react-router-dom";
// import { useState, useEffect, Fragment } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProductCard from "../../components/product-card/product-card.component";
// import {
//   selectCategiesMap,
//   selectCategoriesIsLoading,
// } from "../../store/categories/category.selector";
// import Spinner from "../../components/spinner/spinner.component";
// import { fetchCategoriesAsync } from "../../store/categories/category.action";

// const Category = () => {
//   const { category } = useParams();
//   console.log( "this is category from useParams", category );
//   const categoriesMap = useSelector(selectCategiesMap);
//   console.log( "this is categoriesMap", categoriesMap );
//   // const isLoading = useSelector(selectCategoriesIsLoading);
//   const [products, setProducts] = useState(categoriesMap[category]);
//   console.log( "this is category from useState", category );
//   // console.log("render/re-render category component");

//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchCategoriesAsync());
//   // }, [dispatch]);

//   useEffect(() => {
//     console.log("effect fired calling setProducts");
//     setProducts(categoriesMap[category]);
//     console.log("this is set Products", setProducts(categoriesMap[category]));
//   }, [category, categoriesMap]);

//   return (
//     <Fragment>
//       <h2 className="category-title">{category.toUpperCase()}</h2>
//       <div className="category-container">
//         {products &&
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </div>
//     </Fragment>
//   );
// };

// export default Category;


import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';



const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
    </Fragment>
  );
};

export default Category;
