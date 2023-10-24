import React, { useEffect, useState } from "react";
import "./ScaleSwitch.scss";
import PaintIcon from "../../icons/PaintIcon";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import classNames from "classnames";

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
    const [isPaintSelected, setIsPaintSelected] = useState(false);

    const { paintMode } = useTypedSelector((state) => state.settings);
    const { switchPaintMode } = useActions();

    useEffect(() => {
        if (paintMode) window.addEventListener("keyup", listenToEsc);
    }, [paintMode]);

    const listenToEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            switchPaintMode(false);
            window.removeEventListener("keyup", listenToEsc);
        }
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
            <button
                className={classNames("paintButton", { ["paintButton_active"]: paintMode })}
                onMouseLeave={() => setIsPaintSelected(false)}
                onMouseEnter={() => setIsPaintSelected(true)}
                onClick={() => switchPaintMode(true)}
            >
                <PaintIcon fill={isPaintSelected || paintMode ? "#ffffff" : "#333333"} />
            </button>
            <button aria-label="Увеличить масштаб" onClick={decreaseScale}>
                -
            </button>
            <button aria-label="Уменьшить масштаб" onClick={increaseScale}>
                +
            </button>
        </div>
    );
};

export default ScaleSwitch;
