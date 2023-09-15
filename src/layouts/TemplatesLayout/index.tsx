import React, { ReactElement, useState } from "react";
import "./TemplatesLayout.scss";
import TemplateContainer from "../../components/TemplateContainer";

interface ITemplateLayoutProps {
    layoutTitle: string;
    template: ReactElement;
    templateWidth: 25 | 50;
}

const TemplatesLayout = (props: ITemplateLayoutProps) => {
    const { layoutTitle, template, templateWidth } = props;
    const [templatesCount, setTemplatesCount] = useState(1);
    const increaseTemplateCount = () => setTemplatesCount((prev) => prev + 1);
    const decreaseTemplateCount = () => setTemplatesCount((prev) => prev - 1);
    return (
        <div className="templates-layout">
            <div className="templates-layout__header">
                <h2>{layoutTitle}</h2>
                <button onClick={increaseTemplateCount}>Попробовать еще</button>
            </div>
            <div className="templates-layout__content">
                {[...Array(templatesCount)].map((e, i) => (
                    <TemplateContainer
                        onRemoveTemplate={decreaseTemplateCount}
                        canRemoveTemplate={i>0}
                        key={i}
                        template={template}
                        templateWidth={templateWidth}
                    ></TemplateContainer>
                ))}
            </div>
        </div>
    );
};

export default TemplatesLayout;
