import React from "react";
import { ISVGProps } from "./Type";

interface IDivideIconProps extends ISVGProps {}

const DivideIcon = (props: IDivideIconProps) => {
    const { className } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 14L0 21H4L4 14L24 14V10L4 10L4 3H0L0 10L0 14Z"
                fill="#F09235"
            />
        </svg>
    );
};
export default DivideIcon;
