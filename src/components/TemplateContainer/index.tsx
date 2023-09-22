import React, { ReactElement } from "react";
import classNames from "classnames";
import "./TemplateContainer.scss";

interface ITemplateContainerProps {
    template: ReactElement;
    templateWidth: TemplateWidth;
    canRemoveTemplate: boolean;
    onRemoveTemplate: () => void;
}

export type TemplateWidth = 25 | 33 | 50;

const TemplateContainer = (props: ITemplateContainerProps) => {
    const { template, templateWidth, canRemoveTemplate, onRemoveTemplate } = props;
    return (
        <div
            className={classNames("template__container", {
                ["template__container_multiplication"]: templateWidth === 33,
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
