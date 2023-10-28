import React, { useEffect, useState } from "react";
import PaintIcon from "../../icons/PaintIcon";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import classNames from "classnames";

const PaintButton = () => {
    const [isPaintSelected, setIsPaintSelected] = useState(false);

    const { paintMode } = useTypedSelector((state) => state.settings);
    const { switchPaintMode } = useActions();

    useEffect(() => {
        if (paintMode) {
            window.addEventListener("keyup", listenToEsc);
            document.body.classList.add("paintMode");
        }
    }, [paintMode]);

    const listenToEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            switchPaintMode(false);
            window.removeEventListener("keyup", listenToEsc);
            document.body.classList.remove("paintMode");
        }
    };
    return (
        <button
            className={classNames("paintButton", { ["paintButton_active"]: paintMode })}
            onMouseLeave={() => setIsPaintSelected(false)}
            onMouseEnter={() => setIsPaintSelected(true)}
            onClick={() => switchPaintMode(true)}
        >
            <PaintIcon fill={isPaintSelected || paintMode ? "#ffffff" : "#333333"} />
        </button>
    );
};

export default PaintButton;
