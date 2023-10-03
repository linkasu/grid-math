import React, { useState } from "react";
import BasicCalculationTemplate, { OperationType } from "../BasicCalculationTemplate";
import AdditionTemplate from "../AdditionTemplate";
import { CALCULATED_NUMBERS_COUNT } from "../../layouts/MainPageLayout";
import SubtractionTemplate from "../SubtractionTemplate";
import MultiplicationTemplate from "../MultiplicationTemplate";
import DivisionTemplate from "../DivisionTemplate";

interface ITemplateProps {
    operation: OperationType;
}

export type TemplateType = {
    focusedBasic: number;
    onNextBasic: (moveTo: "next" | "prev") => void;
    setBasicFocused: (basicId: number) => void;
}

const Template = (props: ITemplateProps) => {
    const { operation } = props;
    const [focusedBasic, setFocusedBasic] = useState(0);
    const setNextBasicFocused = (moveTo: "next" | "prev") => {
        if (moveTo === "prev") {
            setFocusedBasic((prev) => prev - 1);
        } else if (moveTo === "next") {
            setFocusedBasic((prev) => prev + 1);
        }
    };

    const getOperationTemplate = (): React.JSX.Element => {
        switch (operation) {
            case "addition":
                return <AdditionTemplate focusedBasic={focusedBasic} onNextBasic={setNextBasicFocused} setBasicFocused={(basicId: number)=>setFocusedBasic(basicId)} />;
            case "subtraction":
                return <SubtractionTemplate focusedBasic={focusedBasic} onNextBasic={setNextBasicFocused} setBasicFocused={(basicId: number)=>setFocusedBasic(basicId)}/>;
            case "multiplication":
                return <MultiplicationTemplate focusedBasic={focusedBasic} onNextBasic={setNextBasicFocused} setBasicFocused={(basicId: number)=>setFocusedBasic(basicId)}/>;
            case "division":
                return <DivisionTemplate focusedBasic={focusedBasic} onNextBasic={setNextBasicFocused} setBasicFocused={(basicId: number)=>setFocusedBasic(basicId)}/>;
        }
    };

    return <div className="template">
        {getOperationTemplate()}
    </div>;
};

export default Template;
