import { OperationType } from "../components/BasicCalculationTemplate";
import { TemplateProps } from "../components/Template";

export interface ITemplatesState {
    addition: string[];
    subtraction: string[];
    multiplication: string[];
    division: string[];
}

export interface ITemplatesAction {
    type: TemplatesActionType;
    payload?: any;
}

export interface AddTemplateAction {
    type: TemplatesActionType.ADD_TEMPLATE;
    payload: OperationType;
}
export interface RemoveTemplateAction {
    type: TemplatesActionType.REMOVE_TEMPLATE;
    payload: TemplateProps;
}

export interface GetState {
    type: TemplatesActionType.GET_STATE;
}

export type TemplatesActions = AddTemplateAction | RemoveTemplateAction | GetState;

export enum TemplatesActionType {
    ADD_TEMPLATE = "ADD_TEMPLATE",
    REMOVE_TEMPLATE = "REMOVE_TEMPLATE",
    GET_STATE = "GET_STATE",
    SET_DEFAULT_FOCUS = "SET_DEFAULT_FOCUS",
}
