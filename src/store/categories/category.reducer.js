import CategoriesPreview from "../../routes/categories-preview/categories-preview.component"
import { CATEGORIES_ACTION_TYPES } from "./category.types"


export const CATEGORY_INITAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
}

export const categoriesReducer = (state = CATEGORY_INITAL_STATE, action = {}) => {
    const { type, payload } = action

    switch(type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return{...state, isLoading: true};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: payload, isLoading: false};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {...state, error: payload, isLoading: false};
        default: 
        return state
    }
}