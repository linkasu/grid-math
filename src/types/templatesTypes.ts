import { TemplateProps } from "../components/Template";

export interface ITemplatesState {
    addition: string[],
    subtraction: string[]
}

export interface ITemplatesAction {
    type: TemplatesActionType;
    payload?: any;
}

export interface AddTemplateAction {
    type: TemplatesActionType.ADD_TEMPLATE;
    payload: TemplateProps;
}
export interface RemoveTemplateAction {
    type: TemplatesActionType.REMOVE_TEMPLATE;
    payload: TemplateProps;
}

export type TemplatesActions = AddTemplateAction | RemoveTemplateAction;

export enum TemplatesActionType {
    ADD_TEMPLATE = "ADD_TEMPLATE",
    REMOVE_TEMPLATE = "REMOVE_TEMPLATE",
    SET_DEFAULT_FOCUS="SET_DEFAULT_FOCUS"
}