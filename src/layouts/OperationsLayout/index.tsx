import React, { useState } from "react";
import "./OperationsLayout.scss";
import TemplateContainer from "../../components/TemplateContainer";
import { OperationType, getTemplateSymbol } from "../../components/BasicCalculationTemplate";
import Template from "../../components/Template";

interface IOperationsLayoutProps {
    layoutTitle: string;
    operationType: OperationType;
}

const OperationsLayout = (props: IOperationsLayoutProps) => {
    const { layoutTitle, operationType } = props;
    const [templatesIds, setTemplatesIds] = useState([`${operationType}-0`]);
    const increaseTemplateCount = () => setTemplatesIds((prev) => [...prev, createNewId()]);
    const createNewId = (): string => {
        const idsCount = templatesIds.length;
        const dividerIndex = templatesIds[idsCount - 1].indexOf("-");
        const lastIdNumber = Number(templatesIds[idsCount - 1].slice(dividerIndex + 1)) + 1;
        return `${operationType}-${lastIdNumber}`;
    };
    const decreaseTemplateCount = (id: string) =>
        setTemplatesIds((prev) => prev.filter((templateId) => templateId !== id));

    return (
        <div className="operations-layout">
            <div className="operations-layout__header container">
                <span className="operations-layout__title">
                    <h2>{layoutTitle}</h2> {getTemplateSymbol(operationType)}
                </span>
                <button onClick={increaseTemplateCount} aria-label="Добавить шаблон" className="operations-layout__add-template">
                    Попробовать еще
                </button>
            </div>
            <div className="operations-layout__templates container">
                {templatesIds.map((id, index) => (
                    <TemplateContainer
                        onRemoveTemplate={decreaseTemplateCount}
                        canRemoveTemplate={index > 0}
                        id={id}
                        key={id}
                        template={<Template operation={operationType}/>}
                        operation={operationType}
                    />
                ))}
            </div>
        </div>
    );
};

export default OperationsLayout;
