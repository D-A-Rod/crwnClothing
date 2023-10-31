// import "./category.styles.scss";
// import { useParams } from "react-router-dom";
// import { useState, useEffect, Fragment } from "react";
// import { useSelector } from "react-redux";
// import ProductCard from "../../components/product-card/product-card.component";
// import { selectCategoriesMap } from "../../store/categories/category.selector";
// // import Spinner from "../../components/spinner/spinner.component";
// // import { fetchCategoriesAsync } from "../../store/categories/category.action";

// const Category = () => {
//   const { category } = useParams();
//   const categoriesMap = useSelector(selectCategoriesMap);
//   const [products, setProducts] = useState(categoriesMap[category]);
//   // const isLoading = useSelector(selectCategoriesIsLoading);
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchCategoriesAsync());
//   // }, [dispatch]);

//   useEffect(() => {
//     setProducts(categoriesMap[category]);
//     console.log("this is set Products", setProducts);
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
import Spinner from '../../components/spinner/spinner.component';

import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector';



const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  //   return (
  //   <Fragment>
  //     <h2 className="category-title">{category.toUpperCase()}</h2>
  //     <div className="category-container">
  //       {products &&
  //         products.map((product) => (
  //           <ProductCard key={product.id} product={product} />
  //         ))}
  //     </div>
  //   </Fragment>
  // );

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




