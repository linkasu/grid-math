import { ADDITION_FIRST_TEMPLATE } from "../../types/DefaultTemplates";
import { ControllActionType, IControllAction, IControllState } from "../../types/controllTypes";

const initialState: IControllState = {
    activeCell: 0,
    activeBasic: ADDITION_FIRST_TEMPLATE.basics[0].id,
    activeTemplate: ADDITION_FIRST_TEMPLATE,
};

export const controllReducer = (
    state: IControllState = initialState,
    action: IControllAction,
): IControllState => {
    switch (action.type) {
        case ControllActionType.SET_FOCUS_CELL:
            return { ...state, activeCell: action.payload };
        case ControllActionType.SET_FOCUS_BASIC:
            return { ...state, activeBasic: action.payload };
        case ControllActionType.SET_PREV_BASIC: {
            const activeBasicIndex = state.activeTemplate.basics.findIndex(
                (basic) => basic.id === action.payload,
            );
            if (activeBasicIndex - 1 >= 0) {
                const nextActiveBasic = state.activeTemplate.basics[activeBasicIndex - 1];
                return { ...state, activeBasic: nextActiveBasic.id };
            }
            return state;
        }
        case ControllActionType.SET_NEXT_BASIC: {
            const activeBasicIndex = state.activeTemplate.basics.findIndex(
                (basic) => basic.id === action.payload,
            );
            if (activeBasicIndex + 1 < state.activeTemplate.basics.length) {
                const nextActiveBasic = state.activeTemplate.basics[activeBasicIndex + 1];
                return { ...state, activeBasic: nextActiveBasic.id };
            }
            return state;
        }
        case ControllActionType.SWITCH_FOCUS_SIDE: {
            return { ...state, activeBasic: action.payload.basicId, activeCell: action.payload.activeCell };
        }
        case ControllActionType.SET_FOCUS_TEMPLATE:
            return { ...state, activeTemplate: action.payload };
        case ControllActionType.SET_DEFAULT_FOCUS:
            return initialState;
        default:
            return state;
    }
};
