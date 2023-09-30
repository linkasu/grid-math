import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";

interface IAdditionTemplateProps {
    calculatedNumbersCount: number;
}

const MAX_DIGIT_NUMBER = 5;

const AdditionTemplate = (props: IAdditionTemplateProps) => {
    const { calculatedNumbersCount } = props;

    return (
        <div className="template">
            <BasicCalculationTemplate
                calculatedNumbersCount={calculatedNumbersCount}
                operation={"addition"}
                digitsInRow={MAX_DIGIT_NUMBER}
                digitsInResult={MAX_DIGIT_NUMBER + 1}
                isFocusedBasic
                basicIndex={0}
            />
        </div>
    );
};

export default AdditionTemplate;
