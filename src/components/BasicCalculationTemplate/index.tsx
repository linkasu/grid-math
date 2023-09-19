import React from "react";
import "./BasicCalculationTemplate.scss";
import classNames from "classnames";
import PlusIcon from "../../icons/PlusIcon";
import MinusIcon from "../../icons/MinusIcon";
import MultiplyIcon from "../../icons/MultiplyIcon";
import CalculationRow from "../CalculationRow";

export type OperationType = "addition" | "subtraction" | "multiplication" | "division";

interface IBasicCalculationTemplateProps {
    operation: OperationType;
    digitsInRow: number;
    calculatedNumbersCount: number;
    isHelperCalculation?: boolean;
}

export const getTemplateSymbol = (operation: OperationType) => {
    switch (operation) {
        case "multiplication":
            return <MultiplyIcon className="template__symbol" />;
        case "subtraction":
            return <MinusIcon className="template__symbol" />;
        case "division":
            return <MinusIcon className="template__symbol" />;
        default:
            return <PlusIcon className="template__symbol" />;
    }
};

const BasicCalculationTemplate = (props: IBasicCalculationTemplateProps) => {
    const { operation, digitsInRow, calculatedNumbersCount, isHelperCalculation = false } = props;
    const needOffset = isHelperCalculation && operation === "addition";

    return (
        <div className="template__calculation">
            {[...Array(calculatedNumbersCount)].map((e, i) => (
                <>
                    {(i === 0 || isHelperCalculation) && (
                        <CalculationRow
                            digitsInRow={digitsInRow}
                            rowType={"helper"}
                            offsetCells={needOffset ? i : 0}
                        />
                    )}
                    <CalculationRow
                        digitsInRow={digitsInRow}
                        rowType={"calculation"}
                        className={classNames({ ["row_last"]: i + 1 === calculatedNumbersCount })}
                        offsetCells={needOffset ? i : 0}
                    />
                    {i === 0 && getTemplateSymbol(operation)}
                </>
            ))}
        </div>
    );
};

export default BasicCalculationTemplate;
