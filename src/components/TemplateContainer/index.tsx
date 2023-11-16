import React, { ReactElement } from "react";
import classNames from "classnames";
import "./TemplateContainer.scss";
import { TemplateOperationType } from "../BasicCalculationTemplate";
import DeleteIcon from "../../icons/DeleteIcon";
import IconButton from "../../ui/IconButton";

interface ITemplateContainerProps {
    templateElement: ReactElement;
    id: string;
    operation: TemplateOperationType;
    canRemoveTemplate: boolean;
    onRemoveTemplate: (id: string) => void;
}

const TemplateContainer = (props: ITemplateContainerProps) => {
    const { templateElement, operation, canRemoveTemplate, onRemoveTemplate, id } = props;
    const onClickRemove = () => onRemoveTemplate(id);
    return (
        <div
            className={classNames("template__container", {
                template__container_small: operation === "addition" || operation === "subtraction",
                template__container_medium: operation === "multiplication",
                template__container_large: operation === "division",
            })}
        >
            {templateElement}
            {canRemoveTemplate && (
                <IconButton
                    icon={<DeleteIcon />}
                    ariaLabel="Удалить шаблон"
                    onClick={onClickRemove}
                />
            )}
        </div>
    );
};

export default TemplateContainer;
