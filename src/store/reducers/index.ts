import { combineReducers } from "redux";
import { controllReducer } from "./controllReducer";
import { templatesReducer } from "./templatesReducer";
import { settingsReducer } from "./settingsReducer";

export const rootReducer = combineReducers({
    controll: controllReducer,
    templates: templatesReducer,
    settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
