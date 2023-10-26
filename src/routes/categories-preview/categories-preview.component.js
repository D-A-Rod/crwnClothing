import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategiesMap } from "../../store/categories/category.selector";


const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategiesMap)
  

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  );
};

export default CategoriesPreview;

// import { Fragment } from 'react';
// import { useSelector } from 'react-redux';

// import {
//   selectCategiesMap,
//   selectCategoriesIsLoading,
// } from '../../store/categories/category.selector';

// import CategoryPreview from '../../components/category-preview/category-preview.component';
// import Spinner from '../../components/spinner/spinner.component';

// const CategoriesPreview = () => {
//   const categoriesMap = useSelector(selectCategiesMap);
//   const isLoading = useSelector(selectCategoriesIsLoading);

//   return (
//     <Fragment>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         Object.keys(categoriesMap).map((title) => {
//           const products = categoriesMap[title];
//           return (
//             <CategoryPreview key={title} title={title} products={products} />
//           );
//         })
//       )}
//     </Fragment>
//   );
// };

// export default CategoriesPreview;
