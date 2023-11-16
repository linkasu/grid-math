import React, { useEffect, useState } from "react";
import PaintIcon from "../../icons/PaintIcon";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import classNames from "classnames";
import "./PaintButton.scss";
import IconButton from "../../ui/IconButton";

const PaintButton = () => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);

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
            turnOffPaintMode();
        }
    };
    const turnOffPaintMode = () => {
        switchPaintMode(false);
        window.removeEventListener("keyup", listenToEsc);
        document.body.classList.remove("paintMode");
    };

    return (
        <>
            {paintMode && (
                <div className="paintButton__background" onClick={turnOffPaintMode}></div>
            )}
            <IconButton
                icon={<PaintIcon fill={isButtonHovered || paintMode ? "#ffffff" : "#333333"} />}
                onClick={() => switchPaintMode(true)}
                ariaLabel="Режим окрашивания"
                popupText="Клетки можно закрашивать"
                buttonClassNames={classNames("paintButton", {
                    ["paintButton_active"]: paintMode,
                })}
                onMouseLeave={() => setIsButtonHovered(false)}
                onMouseEnter={() => setIsButtonHovered(true)}
            />
        </>
    );
};

export default PaintButton;
