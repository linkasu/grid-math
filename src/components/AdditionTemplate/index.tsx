import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { TemplateType } from "../Template";
import { ITemplate } from "../../types/templatesTypes";

interface IAdditionTemplateProps extends TemplateType {
    template: ITemplate;
}

const AdditionTemplate = (props: IAdditionTemplateProps) => {
    const { template } = props;

    return (
        <BasicCalculationTemplate
            basic={template.basics[0]}
            basicIndex={0}
        />
    );
};

export default AdditionTemplate;
