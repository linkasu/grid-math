import { ControllActionType, IControllAction, IControllState } from "../../types/controllTypes";

const initialState: IControllState = {
    activeCell: 0,
    activeTemplate: "addition-0",
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

        default:
            return state;
    }
};
