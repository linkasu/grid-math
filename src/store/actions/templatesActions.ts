import { Dispatch } from "redux";
import { TemplatesActionType, TemplatesActions } from "../../types/templatesTypes";
import { TemplateProps } from "../../components/Template";
import { OperationType } from "../../components/BasicCalculationTemplate";

export const addNewTemplate = (operation: OperationType) => {
    return (dispatch: Dispatch<TemplatesActions>) => {
        dispatch({ type: TemplatesActionType.ADD_TEMPLATE, payload: operation });
    };
};

export const removeTemplate = (template: TemplateProps) => {
    return (dispatch: Dispatch<TemplatesActions>) => {
        dispatch({ type: TemplatesActionType.REMOVE_TEMPLATE, payload: template });
    };
};

export const getTemplatesState = () => {
    return (dispatch: Dispatch<TemplatesActions>) => {
        dispatch({ type: TemplatesActionType.GET_STATE });
    };
};
