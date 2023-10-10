import { OperationType } from "../../components/BasicCalculationTemplate";
import {
    ITemplatesAction,
    ITemplatesState,
    TemplatesActionType,
    TemplatesActions,
} from "../../types/templatesTypes";

export const ADDITION_FIRST_TEMPLATE_ID = "addition-0";
export const SUBTRACTION_FIRST_TEMPLATE_ID = "subtraction-0";
export const MULTIPLICATION_FIRST_TEMPLATE_ID = "multiplication-0";
export const DIVISION_FIRST_TEMPLATE_ID = "division-0";

const initialState: ITemplatesState = {
    addition: [ADDITION_FIRST_TEMPLATE_ID],
    subtraction: [SUBTRACTION_FIRST_TEMPLATE_ID],
    multiplication: [MULTIPLICATION_FIRST_TEMPLATE_ID],
    division: [DIVISION_FIRST_TEMPLATE_ID],
};

export const templatesReducer = (
    state: ITemplatesState = initialState,
    action: TemplatesActions,
): ITemplatesState => {
    const createNewId = (operation: OperationType) => {
        const templatesIds = state[operation];
        const idsCount = templatesIds.length;
        const dividerIndex = templatesIds[idsCount - 1].indexOf("-");
        const lastIdNumber = Number(templatesIds[idsCount - 1].slice(dividerIndex + 1)) + 1;
        return `${operation}-${lastIdNumber}`;
    };

    switch (action.type) {
        case TemplatesActionType.ADD_TEMPLATE: {
            const newTemplatesArray = [...state[action.payload], createNewId(action.payload)];
            return { ...state, [action.payload]: newTemplatesArray };
        }
        case TemplatesActionType.REMOVE_TEMPLATE: {
            const newTemplatesArray = state[action.payload.operation].filter(
                (templateId) => templateId !== action.payload.id,
            );
            return { ...state, [action.payload.operation]: newTemplatesArray };
        }
        case TemplatesActionType.GET_STATE: {
            return state;
        }

        default:
            return state;
    }
};
