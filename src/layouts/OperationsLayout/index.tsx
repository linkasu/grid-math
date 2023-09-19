import React, { ReactElement, useState } from "react";
import "./OperationsLayout.scss";
import TemplateContainer from "../../components/TemplateContainer";
import { OperationType, getTemplateSymbol } from "../../components/BasicCalculationTemplate";

interface IOperationsLayoutProps {
    layoutTitle: string;
    template: ReactElement;
    templateWidth: 25 | 50;
    operationType: OperationType;
}

const OperationsLayout = (props: IOperationsLayoutProps) => {
    const { layoutTitle, template, templateWidth, operationType } = props;
    const [templatesCount, setTemplatesCount] = useState(1);
    const increaseTemplateCount = () => setTemplatesCount((prev) => prev + 1);
    const decreaseTemplateCount = () => setTemplatesCount((prev) => prev - 1);
    return (
        <div className="operations-layout">
            <div className="operations-layout__header">
                <h2>{layoutTitle}</h2> {getTemplateSymbol(operationType)}
                <button onClick={increaseTemplateCount} className="operations-layout__add-template">
                    Попробовать еще
                </button>
            </div>
            <div className="operations-layout__templates">
                {[...Array(templatesCount)].map((e, i) => (
                    <TemplateContainer
                        onRemoveTemplate={decreaseTemplateCount}
                        canRemoveTemplate={i > 0}
                        key={i}
                        template={template}
                        templateWidth={templateWidth}
                    ></TemplateContainer>
                ))}
            </div>
        </div>
    );
};

export default OperationsLayout;
