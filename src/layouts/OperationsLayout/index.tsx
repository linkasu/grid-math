import React, { useState } from "react";
import "./OperationsLayout.scss";
import TemplateContainer from "../../components/TemplateContainer";
import { OperationType, getTemplateSymbol } from "../../components/BasicCalculationTemplate";
import Template from "../../components/Template";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IOperationsLayoutProps {
    layoutTitle: string;
    operationType: OperationType;
}

const OperationsLayout = (props: IOperationsLayoutProps) => {
    const { layoutTitle, operationType } = props;
    const { setActiveCell, setActiveTemplate, setDefaultFocus } = useActions();
    const { addNewTemplate, removeTemplate } = useActions();
    const { activeTemplate } = useTypedSelector((state) => state.controll);
    const templatesIds = useTypedSelector((state) => state.templates[operationType]);
    //const getLastTempplateId = () => templatesIds[templatesIds.length];

    const onAddTemplate = () => {
        addNewTemplate(operationType);
        //setActiveTemplate(getLastTempplateId());
        setActiveCell(0);
    };
    const onRemoveTemplate = (id: string) => {
        removeTemplate({ operation: operationType, id: id, isFocusedTemplate: false });
        setDefaultFocus();
    };

    return (
        <div className="operations-layout">
            <div className="operations-layout__header container">
                <span className="operations-layout__title">
                    <h2>{layoutTitle}</h2> {getTemplateSymbol(operationType)}
                </span>
                <button
                    onClick={onAddTemplate}
                    aria-label="Добавить шаблон"
                    className="operations-layout__add-template"
                >
                    Попробовать еще
                </button>
            </div>
            <div className="operations-layout__templates container">
                {templatesIds.map((id, index) => (
                    <TemplateContainer
                        onRemoveTemplate={onRemoveTemplate}
                        canRemoveTemplate={index > 0}
                        id={id}
                        key={id}
                        template={
                            <Template
                                id={id}
                                operation={operationType}
                                isFocusedTemplate={activeTemplate === id}
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
