import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { CALCULATED_NUMBERS_COUNT } from "../../layouts/MainPageLayout";
import { TemplateType } from "../Template";

interface IAdditionTemplateProps extends TemplateType {
}

const MAX_DIGIT_NUMBER = 5;

const AdditionTemplate = (props: IAdditionTemplateProps) => {
    const { isFocusedTemplate } = props;

    return (
        <BasicCalculationTemplate
            calculatedNumbersCount={CALCULATED_NUMBERS_COUNT}
            operation={"addition"}
            digitsInRow={MAX_DIGIT_NUMBER}
            digitsInResult={MAX_DIGIT_NUMBER + 1}
            basicIndex={0}
            isFocusedBasic={isFocusedTemplate}
        />
    );
};

export default AdditionTemplate;
