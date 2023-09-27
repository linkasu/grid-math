import React, { ReactElement } from "react";
import classNames from "classnames";
import "./TemplateContainer.scss";
import { OperationType } from "../BasicCalculationTemplate";
import DeleteIcon from "../../icons/DeleteIcon";

interface ITemplateContainerProps {
    template: ReactElement;
    id: string;
    operation: OperationType;
    canRemoveTemplate: boolean;
    onRemoveTemplate: (id: string) => void;
}

const TemplateContainer = (props: ITemplateContainerProps) => {
    const { template, operation, canRemoveTemplate, onRemoveTemplate, id } = props;
    const onClickRemove = () => onRemoveTemplate(id);
    return (
        <div
            className={classNames("template__container", {
                template__container_small: operation === "addition" || operation === "subtraction",
                template__container_medium: operation === "multiplication",
                template__container_large: operation === "division",
            })}
        >
            {template}
            <button
                value="Удалить шаблон"
                onClick={onClickRemove}
                className={classNames("template__remove-button", {
                    ["template__remove-button_hidden"]: !canRemoveTemplate,
                })}
            >
                <DeleteIcon />
            </button>
        </div>
    );
};

export default TemplateContainer;
