import React, { useEffect, useState } from "react";
import "./ScaleSwitch.scss";
import ScaleMinusIcon from "../../icons/ScaleMinusIcon";
import ScalePlusIcon from "../../icons/ScalePlusIcon";
import IconButton from "../../ui/IconButton";

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
            <IconButton onClick={increaseScale} ariaLabel="Увеличить масштаб" icon={<ScalePlusIcon />} popupText="Увеличить масштаб"/>
            <IconButton onClick={decreaseScale} ariaLabel="Уменьшить масштаб" icon={<ScaleMinusIcon />} popupText="Уменьшить масштаб"/>
        </div>
    );
};

export default ScaleSwitch;
