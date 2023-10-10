import { Dispatch } from "redux";
import { ControllActionType, ControllActions } from "../../types/controllTypes";

export const setActiveCell = (index: number) => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_FOCUS_CELL, payload: index });
    };
};

export const setActiveTemplate = (id: string) => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_FOCUS_TEMPLATE, payload: id });
    };
};

export const setDefaultFocus = () => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_DEFAULT_FOCUS });
    };
};
