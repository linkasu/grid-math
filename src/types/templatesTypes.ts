import { TemplateOperationType, BasicOperationType } from "../components/BasicCalculationTemplate";
import { TemplateProps } from "../components/Template";

export interface ITemplatesState {
    addition: ITemplate[];
    subtraction: ITemplate[];
    multiplication: ITemplate[];
    division: ITemplate[];
}

export interface ITemplate {
    operation: TemplateOperationType,
    id: string,
    basics: IBasic[]
}

export interface IBasic {
    id: string;
    operation: BasicOperationType;
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
    payload: TemplateOperationType;
}
export interface RemoveTemplateAction {
    type: TemplatesActionType.REMOVE_TEMPLATE;
    payload: ITemplate;
}

export type TemplatesActions = AddTemplateAction | RemoveTemplateAction;

export enum TemplatesActionType {
    ADD_TEMPLATE = "ADD_TEMPLATE",
    REMOVE_TEMPLATE = "REMOVE_TEMPLATE",
    SET_DEFAULT_FOCUS = "SET_DEFAULT_FOCUS",
}
