import React, { useState } from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";

interface IMultiplicationTemplateProps {
    calculatedNumbersCount: number;
}

const MAX_DIGIT_NUMBER = 3;

const MultiplicationTemplate = (props: IMultiplicationTemplateProps) => {
    const { calculatedNumbersCount } = props;
    const [focusedBasic, setFocusedBasic] = useState(0);
    const setNextBasicFocused = (moveTo: "next" | "prev") => {
        if (moveTo==="prev") {
            setFocusedBasic((prev) => prev - 1);
        } else if (moveTo==="next") {
            setFocusedBasic((prev) => prev + 1);
        }
    };

    return (
        <div className="template">
            <BasicCalculationTemplate
                calculatedNumbersCount={calculatedNumbersCount}
                operation={"multiplication"}
                digitsInRow={MAX_DIGIT_NUMBER}
                isFocusedBasic={focusedBasic === 0}
                setBasicFocused={() => {
                    setFocusedBasic(0);
                }}
                setNextBasicFocused={setNextBasicFocused}
                basicIndex={0}
            />
            <BasicCalculationTemplate
                calculatedNumbersCount={MAX_DIGIT_NUMBER}
                operation={"addition"}
                digitsInRow={MAX_DIGIT_NUMBER + 1}
                isHelperCalculation
                digitsInResult={MAX_DIGIT_NUMBER * 2 + 1}
                isFocusedBasic={focusedBasic === 1}
                setBasicFocused={() => {
                    setFocusedBasic(1);
                }}
                setNextBasicFocused={setNextBasicFocused}
                basicIndex={1}
            />
        </div>
    );
};

export default MultiplicationTemplate;
