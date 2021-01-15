import { RootState, AllActions, CHANGE_LANGUAGE } from '../store/types';

export const initialStore: RootState = {
    language: "lv",
};

export const reducer = (state = initialStore, action: AllActions) => {
    switch (action.type) {
        case CHANGE_LANGUAGE: {
            return { ...state, language: action.language };
        }
        default:
            return state;
    }
}; 