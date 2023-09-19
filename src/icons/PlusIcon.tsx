import React from "react";
import { ISVGProps } from "./Type";

interface IPlusIconProps extends ISVGProps {
}

const PlusIcon = (props: IPlusIconProps) => {
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
                d="M8.25 13.75C9.35457 13.75 10.25 14.6454 10.25 15.75V22C10.25 23.1046 11.1454 24 12.25 24C13.3546 24 14.25 23.1046 14.25 22V15.75C14.25 14.6454 15.1454 13.75 16.25 13.75H22C23.1046 13.75 24 12.8546 24 11.75C24 10.6454 23.1046 9.75 22 9.75H16.25C15.1454 9.75 14.25 8.85457 14.25 7.75V2C14.25 0.895431 13.3546 0 12.25 0C11.1454 0 10.25 0.89543 10.25 2V7.75C10.25 8.85457 9.35457 9.75 8.25 9.75H2C0.89543 9.75 0 10.6454 0 11.75C0 12.8546 0.89543 13.75 2 13.75H8.25Z"
                fill="#F09235"
            />
        </svg>
    );
};

export default PlusIcon;
