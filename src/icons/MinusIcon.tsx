import React from "react";
import { ISVGProps } from "./Type";

interface IMinusIconProps extends ISVGProps {}

const MinusIcon = (props: IMinusIconProps) => {
    const {className} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 11.75C24 12.8546 23.1046 13.75 22 13.75H2C0.895431 13.75 0 12.8546 0 11.75V11.75C0 10.6454 0.89543 9.75 2 9.75H22C23.1046 9.75 24 10.6454 24 11.75V11.75Z"
                fill="#F09235"
            />
        </svg>
    );
};

export default MinusIcon;
