import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { TemplateType } from "../Template";
import { ITemplate } from "../../types/templatesTypes";

interface ISubtractionTemplateProps extends TemplateType {
    template: ITemplate}

const SubtractionTemplate = (props: ISubtractionTemplateProps) => {
    return (
        <div className="template template_subtraction">
            <BasicCalculationTemplate
                basic={props.template.basics[0]}
                basicIndex={0}
            />
        </div>
    );
};

export default SubtractionTemplate;
