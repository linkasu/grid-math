import React from "react";
import "./ScaleSwitch.scss";

const ScaleSwitch = () => {
    let zoom = 1;
    let width = 100;

    function increaseScale() {
        zoom = zoom + 0.1;
        width = 100 / zoom;
        document.body.style.transformOrigin = "left top";
        // @ts-ignore
        document.body.style.zoom = zoom;
        //document.body.style.transform = "scale(" + zoom + ")";
        // document.body.style.width = width + "%";
    }
    function decreaseScale() {
        zoom = zoom - 0.1;
        width = 100 / zoom;
        document.body.style.transformOrigin = "left top";
        // @ts-ignore
        document.body.style.zoom = zoom;
        //document.body.style.transform = "scale(" + zoom + ")";
        //document.body.style.width = width + "%";
    }
    return (
        <div className="scaleSwitch">
            <h6>Увеличить масштаб</h6>
            <button onClick={decreaseScale}>-</button>
            <button onClick={increaseScale}>+</button>
        </div>
    );
};

export default ScaleSwitch;
