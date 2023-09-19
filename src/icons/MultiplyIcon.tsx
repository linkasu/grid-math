import React from "react";
import { ISVGProps } from "./Type";

interface IMultiplyIconProps extends ISVGProps {}

const MultiplyIcon = (props: IMultiplyIconProps) => {
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
            <g clipPath="url(#clip0_142_4)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5564 16.2129C11.3374 15.4319 12.6037 15.4319 13.3848 16.2129L17.6276 20.4557C18.4086 21.2368 19.675 21.2368 20.456 20.4557V20.4557C21.2371 19.6747 21.2371 18.4083 20.456 17.6273L16.2132 13.3845C15.4322 12.6034 15.4322 11.3371 16.2132 10.5561L20.4557 6.31358C21.2368 5.53254 21.2368 4.26621 20.4557 3.48516V3.48516C19.6747 2.70411 18.4083 2.70411 17.6273 3.48516L13.3848 7.72764C12.6037 8.50869 11.3374 8.50869 10.5564 7.72764L6.31387 3.48514C5.53282 2.70409 4.26649 2.70409 3.48544 3.48514V3.48514C2.70439 4.26619 2.70439 5.53252 3.48544 6.31357L7.72794 10.5561C8.50899 11.3371 8.50899 12.6034 7.72794 13.3845L3.48514 17.6273C2.70409 18.4083 2.70409 19.6747 3.48514 20.4557V20.4557C4.26619 21.2368 5.53252 21.2368 6.31357 20.4557L10.5564 16.2129Z"
                    fill="#F09235"
                />
            </g>
            <defs>
                <clipPath id="clip0_142_4">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default MultiplyIcon;
