import React from "react";
import "./Template.scss";
import classNames from "classnames";
import PlusIcon from "../../icons/PlusIcon";
import MinusIcon from "../../icons/MinusIcon";

export type OperationType = "addition" | "subtraction" | "multiplication" | "division";

interface ITemplateProps {
    operation: OperationType;
    digitsInRow: number;
    calculationRowsCount: number;
}

const Template = (props: ITemplateProps) => {
    const { operation, digitsInRow, calculationRowsCount } = props;
    const createRow = (cellType: "calc" | "helper", cellsCount: number): React.JSX.Element[] =>
        [...Array(cellsCount)].map((e, i) => (
            <input
                className={classNames("template__cell", {
                    ["template__cell_helper"]: cellType === "helper",
                })}
                key={i}
            />
        ));

    const getTemplateSymbol = () => {
        switch (operation) {
            case "addition":
                return <PlusIcon className="template__symbol" />;
            case "subtraction":
                return <MinusIcon className="template__symbol" />;
            default:
                return <></>;
        }
    };

    return (
        <div className="template">
            <div className="template__row">{createRow("helper", digitsInRow)}</div>
            {[...Array(calculationRowsCount)].map((e, i) => (
                <div className="template__row" key={i}>
                    {i===0 && getTemplateSymbol()}
                    {createRow("calc", digitsInRow)}
                </div>
            ))}
            <div className="template__row template__row_result">
                {createRow("calc", digitsInRow + 1)}
            </div>
        </div>
    );
};

export default Template;
