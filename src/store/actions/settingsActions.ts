import { Dispatch } from "redux";
import { SettingsActionType, SettingsActions } from "../../types/settingsTypes";

export const switchPaintMode = (switchToMode: boolean) => {
    return (dispatch: Dispatch<SettingsActions>) => {
        dispatch({ type: SettingsActionType.SWITCH_PAINT_MODE, payload: switchToMode });
    };
};
