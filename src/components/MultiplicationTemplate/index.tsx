import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { CALCULATED_NUMBERS_COUNT } from "../../layouts/MainPageLayout";
import { TemplateType } from "../Template";

interface IMultiplicationTemplateProps extends TemplateType {}

const MAX_DIGIT_NUMBER = 3;

const MultiplicationTemplate = (props: IMultiplicationTemplateProps) => {
    const { focusedBasic, onNextBasic, setBasicFocused, isFocusedTemplate } = props;

    return (
        <div className="template">
            <BasicCalculationTemplate
                calculatedNumbersCount={CALCULATED_NUMBERS_COUNT}
                operation={"multiplication"}
                digitsInRow={MAX_DIGIT_NUMBER}
                isFocusedBasic={focusedBasic === 0 && isFocusedTemplate}
                setBasicFocused={() => setBasicFocused(0)}
                setNextBasicFocused={onNextBasic}
                basicIndex={0}
            />
            <BasicCalculationTemplate
                calculatedNumbersCount={MAX_DIGIT_NUMBER}
                operation={"addition"}
                digitsInRow={MAX_DIGIT_NUMBER + 1}
                isHelperCalculation
                digitsInResult={MAX_DIGIT_NUMBER * 2 + 1}
                isFocusedBasic={focusedBasic === 1 && isFocusedTemplate}
                setBasicFocused={() => {
                    setBasicFocused(1);
                }}
                setNextBasicFocused={onNextBasic}
                basicIndex={1}
            />
        </div>
    );
};

export default MultiplicationTemplate;
