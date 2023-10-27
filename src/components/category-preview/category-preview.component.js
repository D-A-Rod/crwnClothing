// import "./category-preview.styles.scss";
// import ProductCard from "../product-card/product-card.component";
// import { Link } from "react-router-dom";
// // import Spinner from "../spinner/spinner.component";
// // import {
// //   selectCategiesMap,
// //   selectCategoriesIsLoading,
// // } from "../../store/categories/category.selector";
// // import { useSelector } from "react-redux";
// import { Fragment } from "react";
// // import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";


// //                       { title, products }
// const CategoryPreview = ({ title, products }) => {
//   // const categoriesMap = useSelector(selectCategiesMap);
//   // const isLoading = useSelector(selectCategoriesIsLoading);

//   return (
//     <Fragment>
//       <div className="category-preview-container">
//       <h2>
//         <Link to={title} className="title">{title.toUpperCase()}</Link>
//       </h2>
//       <div className="preview">
//         {products
//           .filter((_, idx) => idx < 4)
//           .map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </div>
//     </div>

//       {/* {isLoading ? (
//         <Spinner />
//       ) : (
//         Object.keys(categoriesMap).map((title) => {
//           const products = categoriesMap[title];
//           return (
//             <CategoriesPreview key={title} title={title} products={products} />
//           );
//         })
//       )} */}
//     </Fragment>
//   );
// };

// export default CategoryPreview;


