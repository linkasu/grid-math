import React, { useEffect } from "react";
import "./OperationsLayout.scss";
import TemplateContainer from "../../components/TemplateContainer";
import {
    TemplateOperationType,
    getTemplateSymbol,
} from "../../components/BasicCalculationTemplate";
import Template from "../../components/Template";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { firebaseAnalytics } from "../../utils/firebase";
import { logEvent } from "firebase/analytics";
import { setActiveRowLength } from "../../store/actions/controllActions";
import Button from "../../ui/Button";

interface IOperationsLayoutProps {
    layoutTitle: string;
    operationType: TemplateOperationType;
}

const OperationsLayout = (props: IOperationsLayoutProps) => {
    const { layoutTitle, operationType } = props;
    const { setActiveCell, setActiveTemplate, setActiveBasic } = useActions();
    const { addNewTemplate, removeTemplate } = useActions();
    const { activeTemplate } = useTypedSelector((state) => state.controll);
    const templates = useTypedSelector((state) => state.templates[operationType]);
    const getLastTempplate = () => templates[templates.length - 1];
    useEffect(() => {
        if (templates.length > 1) {
            const template = getLastTempplate();
            setActiveTemplate(template);
            setActiveBasic(template.basics[0].id);
            setActiveRowLength(template.basics[0].digitsInRow);
            setActiveCell(0);
        }
    }, [templates.length]);

    const onAddTemplate = () => {
        logEvent(firebaseAnalytics, "add_template", { operationType });

        return addNewTemplate(operationType);
    };

    const onRemoveTemplate = (id: string) => {
        const template = templates.find((t) => t.id === id);
        !!template && removeTemplate(template);
        logEvent(firebaseAnalytics, "remove_template", { operationType });
    };

    return (
        <div className="operations-layout">
            <div className="operations-layout__header container">
                <span className="operations-layout__title">
                    <h2>{layoutTitle}</h2> {getTemplateSymbol(operationType)}
                </span>
                <Button
                    onClick={onAddTemplate}
                    aria-label="Добавить шаблон"
                    title="Попробовать еще"
                />
            </div>
            <div className="operations-layout__templates container">
                {templates.map((template, index) => (
                    <TemplateContainer
                        onRemoveTemplate={onRemoveTemplate}
                        canRemoveTemplate={index > 0}
                        id={template.id}
                        key={template.id}
                        templateElement={
                            <Template
                                template={template}
                                isFocusedTemplate={activeTemplate.id === template.id}
                            />
                        }
                        operation={operationType}
                    />
                ))}
            </div>
        </div>
    );
};

export default OperationsLayout;
