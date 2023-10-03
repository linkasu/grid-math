import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { CALCULATED_NUMBERS_COUNT } from "../../layouts/MainPageLayout";
import { TemplateType } from "../Template";

interface ISubtractionTemplateProps extends TemplateType {
}

const MAX_DIGIT_NUMBER = 5;

const SubtractionTemplate = (props: ISubtractionTemplateProps) => {

    return (
        <div className="template template_subtraction">
            <BasicCalculationTemplate
                calculatedNumbersCount={CALCULATED_NUMBERS_COUNT}
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
