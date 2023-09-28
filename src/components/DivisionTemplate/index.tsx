import React from "react";
import "./DivisionTemplate.scss";
import CalculationRow from "../CalculationRow";
import BasicCalculationTemplate from "../BasicCalculationTemplate";

interface IDivisionTemplateProps {
    calculatedNumbersCount: number;
}

const MAX_DIGIT_NUMBER = 5;

const DivisionTemplate = (props: IDivisionTemplateProps) => {
    const { calculatedNumbersCount } = props;

    return (
        <div className="template__division">
            <div className="template">
                {[...Array(MAX_DIGIT_NUMBER)].map((e, i) => (
                    <BasicCalculationTemplate
                        key={`division-helper-${i}`}
                        calculatedNumbersCount={calculatedNumbersCount}
                        operation={"subtraction"}
                        digitsInRow={MAX_DIGIT_NUMBER}
                        isHelperCalculation
                    />
                ))}
                <CalculationRow rowType="calculation" digitsInRow={MAX_DIGIT_NUMBER} />
            </div>
            <div className="template__division-right-side">
                <CalculationRow rowType="calculation" digitsInRow={MAX_DIGIT_NUMBER}/>
                <div className="template__division-divide-line"></div>
                <CalculationRow rowType="result" digitsInRow={MAX_DIGIT_NUMBER}/>
            </div>
        </div>
    );
};

export default DivisionTemplate;
