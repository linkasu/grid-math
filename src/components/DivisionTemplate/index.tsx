import React, { useState } from "react";
import "./DivisionTemplate.scss";
import BasicCalculationTemplate from "../BasicCalculationTemplate";
import { TemplateType } from "../Template";
import { ITemplate } from "../../types/templatesTypes";
import { MAX_DIGIT_NUMBER } from "../../store/utils/CreateTemplates";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IDivisionTemplateProps extends TemplateType {
    template: ITemplate;
}

const DivisionTemplate = (props: IDivisionTemplateProps) => {
    const { template } = props;
    const { activeBasic } = useTypedSelector((state) => state.controll);
    const { switchActiveSides } = useActions();
    const [activeLeftBasic, setLeftActiveBasic] = useState(template.basics[0].id);
    const rightBasic = template.basics[MAX_DIGIT_NUMBER];

    const moveToTemplateSide = (sideToMove: "right" | "left") =>
        sideToMove === "right" ? moveToRightSide() : moveToLeftSide();
    const moveToRightSide = () => {
        if (activeBasic !== rightBasic.id) {
            setLeftActiveBasic(activeBasic);
            switchActiveSides(rightBasic.id, 0);
        }
    };
    const moveToLeftSide = () => {
        if (activeBasic === rightBasic.id) {
            switchActiveSides(activeLeftBasic, MAX_DIGIT_NUMBER - 1);
        }
    };

    return (
        <div className="template__division">
            <div className="template">
                <BasicCalculationTemplate
                    basic={template.basics[0]}
                    basicIndex={0}
                    onMoveToSide={moveToTemplateSide}
                />
                {template.basics.map((basic, i) => {
                    return (
                        i !== template.basics.length - 1 && i!==0 && (
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
                basic={rightBasic}
                basicIndex={MAX_DIGIT_NUMBER}
                onMoveToSide={moveToTemplateSide}
            />
        </div>
    );
};

export default DivisionTemplate;
