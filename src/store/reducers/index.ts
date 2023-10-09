import { combineReducers } from "redux";
import { controllReducer } from "./controllReducer";

export const rootReducer = combineReducers({
    controll: controllReducer
})

export type RootState = ReturnType<typeof rootReducer>