import React from "react";
import "./DivisionTemplate.scss";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { CALCULATED_NUMBERS_COUNT } from "../../layouts/MainPageLayout";
import { TemplateType } from "../Template";

interface IDivisionTemplateProps extends TemplateType {
    isFocusedTemplate?: boolean;
}

const MAX_DIGIT_NUMBER = 5;

const DivisionTemplate = (props: IDivisionTemplateProps) => {
    const { focusedBasic, onNextBasic, setBasicFocused, isFocusedTemplate=false } = props;

    return (
        <div className="template__division">
            <div className="template">
                {[...Array(MAX_DIGIT_NUMBER)].map((e, i) => (
                    <BasicCalculationTemplate
                        key={`division-helper-${i}`}
                        calculatedNumbersCount={CALCULATED_NUMBERS_COUNT}
                        operation={"subtraction"}
                        digitsInRow={MAX_DIGIT_NUMBER}
                        isHelperCalculation
                        digitsInResult={i + 1 === MAX_DIGIT_NUMBER ? MAX_DIGIT_NUMBER : 0}
                        isFocusedBasic={i === focusedBasic && isFocusedTemplate}
                        setBasicFocused={() => {
                            setBasicFocused(i);
                        }}
                        basicIndex={i}
                        setNextBasicFocused={onNextBasic}
                    />
                ))}
            </div>
            <BasicCalculationTemplate
                calculatedNumbersCount={CALCULATED_NUMBERS_COUNT}
                operation="division"
                digitsInRow={MAX_DIGIT_NUMBER}
                setBasicFocused={() => setBasicFocused(MAX_DIGIT_NUMBER)}
                isFocusedBasic={focusedBasic === MAX_DIGIT_NUMBER && isFocusedTemplate}
                basicIndex={MAX_DIGIT_NUMBER}
            />
        </div>
    );
};

export default DivisionTemplate;
