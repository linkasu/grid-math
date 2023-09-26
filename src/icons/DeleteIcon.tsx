import React from "react";
import { ISVGProps } from "./Type";

interface IDeleteIconProps extends ISVGProps {}

const DeleteIcon = (props: IDeleteIconProps) => {
    const { className } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <g clipPath="url(#clip0_210_555)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7285 12.7886L17.5618 18.6219L18.9761 17.2077L13.1427 11.3744L18.6225 5.89458L17.2083 4.48036L11.7285 9.96015L6.24814 4.47977L4.83392 5.89398L10.3143 11.3744L4.48038 17.2083L5.89459 18.6225L11.7285 12.7886Z"
                    fill="#1A1717"
                />
            </g>
            <defs>
                <clipPath id="clip0_210_555">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
export default DeleteIcon;
