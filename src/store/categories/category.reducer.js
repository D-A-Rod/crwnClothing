// // import CategoriesPreview from "../../routes/categories-preview/categories-preview.component"
// // import { CATEGORIES_ACTION_TYPES } from "./category.types"

// // export const CATEGORY_INITAL_STATE = {
// //     categories: [],
// //     isLoading: false,
// //     error: null,
// // }

// // export const categoriesReducer = (state = CATEGORY_INITAL_STATE, action = {}) => {
// //     const { type, payload } = action

// //     switch(type) {
// //         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
// //             return{...state, isLoading: true};
// //         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
// //             return {...state, categories: payload, isLoading: false};
// //         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
// //             return {...state, error: payload, isLoading: false};
// //         default:
// //         return state
// //     }
// // }

import { CATEGORIES_ACTION_TYPES } from './category.types';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

// import { CATEGORIES_ACTION_TYPES } from "./category.types";
// import { createAction } from "../../utils/reducer/reducer.utils";

// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const fetchCategoriesStart = () =>
//   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

// export const fetchCategoriesSuccess = (categoriesArray) =>
//   createAction(
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
//     categoriesArray
//   );

// export const fetchCategoriesFailure = (error) =>
//   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray = await getCategoriesAndDocuments("categories");
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };
