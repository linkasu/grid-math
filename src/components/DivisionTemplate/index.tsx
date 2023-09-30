import React, { useState } from "react";
import "./DivisionTemplate.scss";
import BasicCalculationTemplate from "../BasicCalculationTemplate";

interface IDivisionTemplateProps {
    calculatedNumbersCount: number;
}

const MAX_DIGIT_NUMBER = 5;

const DivisionTemplate = (props: IDivisionTemplateProps) => {
    const { calculatedNumbersCount } = props;
    const [focusedBasic, setFocusedBasic] = useState(0);

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
                        digitsInResult={i + 1 === MAX_DIGIT_NUMBER ? MAX_DIGIT_NUMBER : 0}
                        isFocusedBasic={i === focusedBasic}
                        setBasicFocused={() => {
                            setFocusedBasic(i);
                        }}
                        basicIndex={i}
                    />
                ))}
            </div>
            <BasicCalculationTemplate
                calculatedNumbersCount={calculatedNumbersCount}
                operation="division"
                digitsInRow={MAX_DIGIT_NUMBER}
                setBasicFocused={() => setFocusedBasic(MAX_DIGIT_NUMBER)}
                isFocusedBasic={focusedBasic === MAX_DIGIT_NUMBER}
                basicIndex={MAX_DIGIT_NUMBER}
            />
        </div>
    );
};

export default DivisionTemplate;
