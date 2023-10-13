import { ITemplate } from "./templatesTypes";

export interface IControllState {
    activeCell: number;
    activeRowLength: number;
    activeBasic: string;
    activeTemplate: ITemplate;
}

export interface IControllAction {
    type: ControllActionType;
    payload?: any;
}

export interface SetFocusCellAction {
    type: ControllActionType.SET_FOCUS_CELL;
    payload: number;
}

export interface SetFocusRowLength {
    type: ControllActionType.SET_FOCUS_ROW_LENGTH;
    payload: number;
}

export interface SetFocusBasicAction {
    type: ControllActionType.SET_FOCUS_BASIC;
    payload: string;
}

export interface SetPreviosBasicAction {
    type: ControllActionType.SET_PREV_BASIC;
    payload: string;
}

export interface SetNextBasicAction {
    type: ControllActionType.SET_NEXT_BASIC;
    payload: string;
}

export interface SwitchActiveSides {
    type: ControllActionType.SWITCH_FOCUS_SIDE;
    payload: {
        basicId: string;
        activeCell: number;
    };
}

export interface SetFocusTemplateAction {
    type: ControllActionType.SET_FOCUS_TEMPLATE;
    payload: ITemplate;
}

export interface SetDefaultFocus {
    type: ControllActionType.SET_DEFAULT_FOCUS;
}

export type ControllActions =
    | SetFocusCellAction
    | SetFocusRowLength
    | SetFocusBasicAction
    | SetPreviosBasicAction
    | SetNextBasicAction
    | SwitchActiveSides
    | SetFocusTemplateAction
    | SetDefaultFocus;

export enum ControllActionType {
    SET_FOCUS_CELL = "SET_FOCUS_CELL",
    SET_FOCUS_ROW_LENGTH = "SET_FOCUS_ROW_LENGTH",
    SET_FOCUS_BASIC = "SET_FOCUS_BASIC",
    SET_PREV_BASIC = "SET_PREV_BASIC",
    SET_NEXT_BASIC = "SET_NEXT_BASIC",
    SWITCH_FOCUS_SIDE = "SWITCH_FOCUS_SIDE",
    SET_FOCUS_TEMPLATE = "SET_FOCUS_TEMPLATE",
    SET_DEFAULT_FOCUS = "SET_DEFAULT_FOCUS",
}
