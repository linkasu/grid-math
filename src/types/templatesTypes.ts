import { OperationType } from "../components/BasicCalculationTemplate";
import { TemplateProps } from "../components/Template";

export interface ITemplatesState {
    addition: ITemplate[];
    subtraction: ITemplate[];
    multiplication: ITemplate[];
    division: ITemplate[];
}

export interface ITemplate {
    operation: OperationType,
    id: string,
    basics: IBasic[]
}

export interface IBasic {
    id: string;
    operation: OperationType;
    digitsInRow: number;
    calculatedNumbersCount: number;
    isHelperCalculation?: boolean;
    digitsInResult?: number;
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
    payload: ITemplate;
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
