import { combineReducers } from "redux";
import { controllReducer } from "./controllReducer";
import { templatesReducer } from "./templatesReducer";

export const rootReducer = combineReducers({
    controll: controllReducer,
    templates: templatesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
