import { Dispatch } from "redux";
import { ControllActionType, ControllActions } from "../../types/controllTypes";
import { ITemplate } from "../../types/templatesTypes";

export const setActiveCell = (index: number) => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_FOCUS_CELL, payload: index });
    };
};

export const setActiveBasic = (id: string) => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_FOCUS_BASIC, payload: id });
    };
};

export const setPreviosBasic = (id: string) => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_PREV_BASIC, payload: id });
    };
};

export const setNextBasic = (id: string) => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_NEXT_BASIC, payload: id });
    };
};

export const setActiveTemplate = (template: ITemplate) => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_FOCUS_TEMPLATE, payload: template });
    };
};

export const setDefaultFocus = () => {
    return (dispatch: Dispatch<ControllActions>) => {
        dispatch({ type: ControllActionType.SET_DEFAULT_FOCUS });
    };
};
