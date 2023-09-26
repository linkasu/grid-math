import React, { ReactElement } from "react";
import classNames from "classnames";
import "./TemplateContainer.scss";
import { OperationType } from "../BasicCalculationTemplate";
import DeleteIcon from "../../icons/DeleteIcon";

interface ITemplateContainerProps {
    template: ReactElement;
    operation: OperationType;
    canRemoveTemplate: boolean;
    onRemoveTemplate: () => void;
}

const TemplateContainer = (props: ITemplateContainerProps) => {
    const { template, operation, canRemoveTemplate, onRemoveTemplate } = props;
    return (
        <div
            className={classNames("template__container", {
                "col-xl-3 col-lg-4 col-lg-4 col-md-6 col-md-6":
                    operation === "addition" || operation === "subtraction",
                "col-xl-4 col-lg-6": operation === "multiplication",
                "col-xl-6 col-lg-12": operation === "division",
            })}
        >
            {template}
            {canRemoveTemplate && (
                <button
                    value="Удалить шаблон"
                    onClick={onRemoveTemplate}
                    className="template__remove-button"
                >
                    <DeleteIcon />
                </button>
            )}
        </div>
    );
};

export default TemplateContainer;
