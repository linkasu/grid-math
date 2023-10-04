export class ControlUtils {
    static ChangeActiveBasic = (moveTo: "prev" | "next", moveFunction: ()=>void) => {
        if (moveTo==="prev") {
            moveFunction();
        } else if (moveTo==="next") {
            moveFunction();
        }
    }
    /*static focusControl(text: string): string {
        
    }*/

}
