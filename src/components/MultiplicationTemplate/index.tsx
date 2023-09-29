import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";

interface IMultiplicationTemplateProps {
    calculatedNumbersCount: number;
}

const MAX_DIGIT_NUMBER = 3;

const MultiplicationTemplate = (props: IMultiplicationTemplateProps) => {
    const { calculatedNumbersCount } = props;

    return (
        <div className="template">
            <BasicCalculationTemplate
                calculatedNumbersCount={calculatedNumbersCount}
                operation={"multiplication"}
                digitsInRow={MAX_DIGIT_NUMBER}
                isFocusedBasic
            />
            <BasicCalculationTemplate
                calculatedNumbersCount={MAX_DIGIT_NUMBER}
                operation={"addition"}
                digitsInRow={MAX_DIGIT_NUMBER + 1}
                isHelperCalculation
                digitsInResult={MAX_DIGIT_NUMBER * 2 + 1}
            />
        </div>
    );
};

export default MultiplicationTemplate;
