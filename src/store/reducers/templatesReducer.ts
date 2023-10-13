import { OperationType } from "../../components/BasicCalculationTemplate";
import {
    ADDITION_FIRST_TEMPLATE,
    DIVISION_FIRST_TEMPLATE,
    MULTIPLICATION_FIRST_TEMPLATE,
    SUBTRACTION_FIRST_TEMPLATE,
    createAdditionBasics,
    createDivisionBasics,
    createMultiplicationBasics,
    createSubtractionBasics,
} from "../utils/CreateTemplates";
import {
    ITemplate,
    ITemplatesState,
    TemplatesActionType,
    TemplatesActions,
} from "../../types/templatesTypes";

const initialState: ITemplatesState = {
    addition: [ADDITION_FIRST_TEMPLATE],
    subtraction: [SUBTRACTION_FIRST_TEMPLATE],
    multiplication: [MULTIPLICATION_FIRST_TEMPLATE],
    division: [DIVISION_FIRST_TEMPLATE],
};

export const templatesReducer = (
    state: ITemplatesState = initialState,
    action: TemplatesActions,
): ITemplatesState => {
    const createNewTemplate = (operation: OperationType): ITemplate => {
        const templateId = createNewId(operation);
        const templateBasics = createTemplatesBasics(operation, templateId);
        return {
            operation: operation,
            id: templateId,
            basics: templateBasics,
        };
    };

    const createNewId = (operation: OperationType) => {
        const templatesIds = state[operation];
        const idsCount = templatesIds.length;
        const dividerIndex = templatesIds[idsCount - 1].id.indexOf("-");
        const lastIdNumber = Number(templatesIds[idsCount - 1].id.slice(dividerIndex + 1)) + 1;
        return `${operation}-${lastIdNumber}`;
    };

    const createTemplatesBasics = (operation: OperationType, templateId: string) => {
        switch (operation) {
            case "addition":
                return createAdditionBasics(templateId);
            case "subtraction":
                return createSubtractionBasics(templateId);
            case "multiplication":
                return createMultiplicationBasics(templateId);
            case "division":
                return createDivisionBasics(templateId);
        }
    };

    switch (action.type) {
        case TemplatesActionType.ADD_TEMPLATE: {
            const newTemplatesArray = [...state[action.payload], createNewTemplate(action.payload)];
            return { ...state, [action.payload]: newTemplatesArray };
        }
        case TemplatesActionType.REMOVE_TEMPLATE: {
            const newTemplatesArray = state[action.payload.operation].filter(
                (template) => template.id !== action.payload.id,
            );
            return { ...state, [action.payload.operation]: newTemplatesArray };
        }
        default:
            return state;
    }
};
