import { ITemplatesAction, ITemplatesState, TemplatesActionType } from "../../types/templatesTypes";

const initialState: ITemplatesState = {
    addition: [],
    subtraction: [],
};

/*export const templatesReducer = (
    state: ITemplatesState = initialState,
    action: ITemplatesAction,
): ITemplatesState => {
    switch (action.type) {
        case TemplatesActionType.ADD_TEMPLATE: {
            const newArray = [...state[action.payload.operation], action.payload.id];
            return { ...state, 
                [operation]: state[...action.payload.operation, action.payload.id]
            };
        }

        default:
            return state;
    }
};*/