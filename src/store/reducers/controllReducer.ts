import { ControllActionType, IControllAction, IControllState } from "../../types/controllTypes";
import { ADDITION_FIRST_TEMPLATE_ID } from "./templatesReducer";

const initialState: IControllState = {
    activeCell: 0,
    activeTemplate: ADDITION_FIRST_TEMPLATE_ID,
};

export const controllReducer = (
    state: IControllState = initialState,
    action: IControllAction,
): IControllState => {
    switch (action.type) {
        case ControllActionType.SET_FOCUS_CELL:
            return { ...state, activeCell: action.payload };
        case ControllActionType.SET_FOCUS_TEMPLATE:
            return { ...state, activeTemplate: action.payload };
        case ControllActionType.SET_DEFAULT_FOCUS:
            return initialState;
        default:
            return state;
    }
};
