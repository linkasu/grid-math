import React from "react";
import CalculationRow from "../CalculationRow";
import BasicCalculationTemplate from "../BasicCalculationTemplate";

interface ISubtractionTemplateProps {
    calculatedNumbersCount: number;
}

const MAX_DIGIT_NUMBER = 5;

const SubtractionTemplate = (props: ISubtractionTemplateProps) => {
    const { calculatedNumbersCount } = props;

    return (
        <div className="template">
            <BasicCalculationTemplate
                calculatedNumbersCount={calculatedNumbersCount}
                operation={"subtraction"}
                digitsInRow={MAX_DIGIT_NUMBER}
            />
            <CalculationRow rowType="result" digitsInRow={MAX_DIGIT_NUMBER} />
        </div>
    );
};

export default SubtractionTemplate;
