import React from "react";
import { ISVGProps } from "./Type";

interface IScaleMinusIconProps extends ISVGProps {}

const ScaleMinusIcon = (props: IScaleMinusIconProps) => {
    const { className } = props;
    return (
        <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 2H0V0H16V2Z" fill="black" />
        </svg>
    );
};

export default ScaleMinusIcon;
