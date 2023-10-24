import { ISettingsState, SettingsActionType, SettingsActions } from "../../types/settingsTypes";

const initialState: ISettingsState = {
    paintMode: false
};

export const settingsReducer = (
    state: ISettingsState = initialState,
    action: SettingsActions,
): ISettingsState => {
    switch (action.type) {
        case SettingsActionType.SWITCH_PAINT_MODE:
            return { ...state, paintMode: action.payload };
        default:
            return state;
    }
};
