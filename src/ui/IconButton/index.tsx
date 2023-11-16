import React, { ReactElement, useState } from "react";
import "./IconButton.scss";
import classNames from "classnames";

type IIconButtonProps ={
    icon: ReactElement;
    onClick: () => void;
    ariaLabel: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    popupText?: string;
    showPopup?: boolean;
    buttonClassNames?: string;
}

const IconButton = (props: IIconButtonProps) => {
    const {
        icon,
        onClick,
        ariaLabel,
        onMouseEnter,
        onMouseLeave,
        popupText,
        buttonClassNames,
    } = props;
    const [isOnHover, setIsOnHover] = useState(false);

    const onMouseEnterButton = () => {
        setIsOnHover(true);
        !!onMouseEnter && onMouseEnter();
    };
    const onMouseLeaveButton = () => {
        setIsOnHover(false);
        !!onMouseLeave && onMouseLeave();
    };

    return (
        <button
            className={classNames("iconButton", buttonClassNames)}
            onMouseLeave={popupText ? onMouseLeaveButton : undefined}
            onMouseEnter={popupText ? onMouseEnterButton : undefined}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {icon}
            <div
                className={classNames("iconButton__popup", {
                    ["iconButton__popup_visible"]: isOnHover,
                })}
            >
                <span>{popupText}</span>
            </div>
        </button>
    );
};

export default IconButton;
