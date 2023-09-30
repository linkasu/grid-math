import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";

interface ISubtractionTemplateProps {
    calculatedNumbersCount: number;
}

const MAX_DIGIT_NUMBER = 5;

const SubtractionTemplate = (props: ISubtractionTemplateProps) => {
    const { calculatedNumbersCount } = props;

    return (
        <div className="template template_subtraction">
            <BasicCalculationTemplate
                calculatedNumbersCount={calculatedNumbersCount}
                operation={"subtraction"}
                digitsInRow={MAX_DIGIT_NUMBER}
                digitsInResult={MAX_DIGIT_NUMBER}
                isFocusedBasic={true}
                basicIndex={0}
            />
        </div>
    );
};

export default SubtractionTemplate;
