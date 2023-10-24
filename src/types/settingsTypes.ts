export interface ISettingsState {
    paintMode: boolean;
}

export interface SwitchPaintMode {
    type: SettingsActionType.SWITCH_PAINT_MODE;
    payload: boolean;
}

export type SettingsActions =
    | SwitchPaintMode

export enum SettingsActionType {
    SWITCH_PAINT_MODE = "SWITCH_PAINT_MODE",
}
