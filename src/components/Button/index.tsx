import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface IButtonProps {
    onClick?: () => void;
    title: string;
    ariaLabel?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const Button = (props: IButtonProps) => {
    const { onClick, title, ariaLabel, className, type="button" } = props;
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={classNames("button", className)}
            type={type}
        >
            {title}
        </button>
    );
};

export default Button;
