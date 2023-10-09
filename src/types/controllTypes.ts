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

export type ControllActions = SetFocusCellAction | SetFocusTemplateAction;

export enum ControllActionType {
    SET_FOCUS_CELL = "SET_FOCUS_CELL",
    SET_FOCUS_TEMPLATE = "SET_FOCUS_TEMPLATE",
    FOCUS_PREV_CELL = "FOCUS_PREV_CELL",
    FOCUS_NEXT_CELL = "FOCUS_NEXT_CELL",
}
