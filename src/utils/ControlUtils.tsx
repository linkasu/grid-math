class ControlUtils {
    constructor(){}
    private _activeCell = 0;
    static ChangeActiveBasic = (moveTo: "prev" | "next", moveFunction: ()=>void) => {
        if (moveTo==="prev") {
            moveFunction();
        } else if (moveTo==="next") {
            moveFunction();
        }
    }
    get activeCell(): number {
        return this._activeCell
    }
    setActiveCell(index: number) {
        this._activeCell = index;
    }
    /*static focusControl(text: string): string {
        
    }*/

}

export const controll = new ControlUtils();
