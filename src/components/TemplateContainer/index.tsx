import React, { ReactElement } from "react";
import classNames from "classnames";
import "./TemplateContainer.scss";

interface ITemplateContainerProps {
    template: ReactElement;
    templateWidth: 25 | 50;
    canRemoveTemplate: boolean;
    onRemoveTemplate: () => void;
}

const TemplateContainer = (props: ITemplateContainerProps) => {
    const { template, templateWidth, canRemoveTemplate, onRemoveTemplate } = props;
    return (
        <div
            className={classNames("template__container", {
                ["template__container_devision"]: templateWidth === 50,
            })}
        >
            {canRemoveTemplate && (
                <button onClick={onRemoveTemplate} className="template__remove-button">
                    x
                </button>
            )}
            {template}
        </div>
    );
};

export default TemplateContainer;
