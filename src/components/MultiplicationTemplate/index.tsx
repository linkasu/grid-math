import React from "react";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { TemplateType } from "../Template";
import { ITemplate } from "../../types/templatesTypes";

interface IMultiplicationTemplateProps extends TemplateType {
    template: ITemplate;
}

const MultiplicationTemplate = (props: IMultiplicationTemplateProps) => {
    const { template } = props;

    return (
        <div className="template">
            {template.basics.map((basic, i) => (
                <BasicCalculationTemplate
                    basic={basic}
                    key={basic.id}
                    basicIndex={i}
                />
            ))}
        </div>
    );
};

export default MultiplicationTemplate;
