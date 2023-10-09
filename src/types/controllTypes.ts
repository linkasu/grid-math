export interface IControllState {
    activeCell: number;
    activeTemplate: string;
}

export interface IControllAction {
    type: ControllActionType;
    payload?: any;
}

export interface SetFocusCellAction {
    type: ControllActionType.SET_FOCUS_CELL;
    payload: number;
}

export interface SetFocusTemplateAction {
    type: ControllActionType.SET_FOCUS_TEMPLATE;
    payload: string;
}

export interface SetDefaultFocus {
    type: ControllActionType.SET_DEFAULT_FOCUS;
}

export type ControllActions = SetFocusCellAction | SetFocusTemplateAction | SetDefaultFocus;


export enum ControllActionType {
    SET_FOCUS_CELL = "SET_FOCUS_CELL",
    SET_FOCUS_TEMPLATE = "SET_FOCUS_TEMPLATE",
    SET_DEFAULT_FOCUS = "SET_DEFAULT_FOCUS"
}
