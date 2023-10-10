import React, { useState } from "react";
import "./DivisionTemplate.scss";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { TemplateType } from "../Template";
import { ITemplate } from "../../types/templatesTypes";
import { MAX_DIGIT_NUMBER } from "../../types/DefaultTemplates";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IDivisionTemplateProps extends TemplateType {
    template: ITemplate;
}

const DivisionTemplate = (props: IDivisionTemplateProps) => {
    const { template } = props;
    const { activeBasic } = useTypedSelector((state) => state.controll);
    const { setActiveBasic } = useActions();
    const [activeLeftBasic, setLeftActiveBasic] = useState(template.basics[0].id);

    const moveToTemplateSide = (sideToMove: "right" | "left") =>
        sideToMove === "right" ? moveToRightSide() : moveToLeftSide();
    const moveToRightSide = () => {
        if (activeBasic !== template.basics[MAX_DIGIT_NUMBER].id) {
            setLeftActiveBasic(activeBasic);
        }
        setActiveBasic(template.basics[MAX_DIGIT_NUMBER].id);
    };
    const moveToLeftSide = () => setActiveBasic(activeLeftBasic);

    return (
        <div className="template__division">
            <div className="template">
                {template.basics.map((basic, i) => {
                    return (
                        i !== template.basics.length - 1 && (
                            <BasicCalculationTemplate
                                key={basic.id}
                                basic={basic}
                                basicIndex={i}
                                onMoveToSide={moveToTemplateSide}
                            />
                        )
                    );
                })}
            </div>
            <BasicCalculationTemplate
                basic={template.basics[MAX_DIGIT_NUMBER]}
                basicIndex={MAX_DIGIT_NUMBER}
                onMoveToSide={moveToTemplateSide}
            />
        </div>
    );
};

export default DivisionTemplate;
