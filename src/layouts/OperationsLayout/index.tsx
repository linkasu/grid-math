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
    const [templatesIds, setTemplatesIds] = useState([`${operationType}-0`]);
    const { setActiveCell, setActiveTemplate } = useActions();
    const { activeTemplate } = useTypedSelector((state) => state.controll);
    const addNewTemplate = () => {
        const newId = createNewId();
        setTemplatesIds((prev) => [...prev, newId]);
        setActiveTemplate(newId);
        setActiveCell(0);
    };
    const createNewId = (): string => {
        const idsCount = templatesIds.length;
        const dividerIndex = templatesIds[idsCount - 1].indexOf("-");
        const lastIdNumber = Number(templatesIds[idsCount - 1].slice(dividerIndex + 1)) + 1;
        return `${operationType}-${lastIdNumber}`;
    };
    const removeTemplate = (id: string) => {
        setTemplatesIds((prev) => prev.filter((templateId) => templateId !== id));
        setActiveCell(0);
    };

    return (
        <div className="operations-layout">
            <div className="operations-layout__header container">
                <span className="operations-layout__title">
                    <h2>{layoutTitle}</h2> {getTemplateSymbol(operationType)}
                </span>
                <button
                    onClick={addNewTemplate}
                    aria-label="Добавить шаблон"
                    className="operations-layout__add-template"
                >
                    Попробовать еще
                </button>
            </div>
            <div className="operations-layout__templates container">
                {templatesIds.map((id, index) => (
                    <TemplateContainer
                        onRemoveTemplate={removeTemplate}
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
