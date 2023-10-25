import React from "react";
import { ISVGProps } from "./Type";

interface IScalePlusIconProps extends ISVGProps {}

const ScalePlusIcon = (props: IScalePlusIconProps) => {
    const { className } = props;
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 7V0H7V7H0V9H7V16H9V9H16V7H9Z"
                fill="black"
            />
        </svg>
    );
};

export default ScalePlusIcon;
