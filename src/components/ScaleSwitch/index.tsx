import React from "react";
import "./ScaleSwitch.scss";

const ScaleSwitch = () => {
    let zoom = 1;
    let width = 100;
    // @ts-ignore
    const isChrome = window.chrome;

    const increaseScale = () => {
        zoom = zoom + 0.1;
        scalePage(zoom);
    };
    const decreaseScale = () => {
        zoom = zoom - 0.1;
        scalePage(zoom);
    };

    const scalePage = (zoom: number) => {
        const scalableLayout = document.getElementById("templates-page");
        if (!scalableLayout) return;
        width = 100 / zoom;
        scalableLayout.style.transformOrigin = "left top";
        // @ts-ignore
        scalableLayout.style.zoom = zoom;
        if (!isChrome) {
            scalableLayout.style.transform = "scale(" + zoom + ")";
            scalableLayout.style.width = width + "%";
        }
    };
    return (
        <div className="scaleSwitch">
            <h6>Изменить масштаб</h6>
            <button aria-label="Увеличить масштаб" onClick={decreaseScale}>-</button>
            <button aria-label="Уменьшить масштаб"  onClick={increaseScale}>+</button>
        </div>
    );
};

export default ScaleSwitch;
