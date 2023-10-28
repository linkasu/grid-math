import { Dispatch } from "redux";
import { ITemplate, TemplatesActionType, TemplatesActions } from "../../types/templatesTypes";
import { TemplateOperationType } from "../../components/BasicCalculationTemplate";

export const addNewTemplate = (operation: TemplateOperationType) => {
    return (dispatch: Dispatch<TemplatesActions>) => {
        dispatch({ type: TemplatesActionType.ADD_TEMPLATE, payload: operation });
    };
};

export const removeTemplate = (template: ITemplate) => {
    return (dispatch: Dispatch<TemplatesActions>) => {
        dispatch({ type: TemplatesActionType.REMOVE_TEMPLATE, payload: template });
    };
};
