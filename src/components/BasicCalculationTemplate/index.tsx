import React from "react";
import "./BasicCalculationTemplate.scss";
import classNames from "classnames";
import PlusIcon from "../../icons/PlusIcon";
import MinusIcon from "../../icons/MinusIcon";
import MultiplyIcon from "../../icons/MultiplyIcon";
import CalculationRow from "../CalculationRow";
import DivideIcon from "../../icons/DivideIcon";

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
            return <MultiplyIcon />;
        case "subtraction":
            return <MinusIcon />;
        case "division":
            return <DivideIcon />;
        default:
            return <PlusIcon />;
    }
};

const BasicCalculationTemplate = (props: IBasicCalculationTemplateProps) => {
    const { operation, digitsInRow, calculatedNumbersCount, isHelperCalculation = false } = props;
    const isHelperAddition = isHelperCalculation && operation === "addition";

    return (
        <div className="template__calculation">
            {[...Array(calculatedNumbersCount)].map((e, i) => (
                <>
                    {(i === 0 || isHelperCalculation) && (
                        <CalculationRow
                            digitsInRow={digitsInRow}
                            rowType={"helper"}
                            offsetCells={isHelperAddition ? i : 0}
                        />
                    )}
                    <CalculationRow
                        digitsInRow={digitsInRow}
                        rowType={"calculation"}
                        className={classNames({
                            ["calculationRow_last"]: i + 1 === calculatedNumbersCount,
                        })}
                        offsetCells={isHelperAddition ? i : 0}
                    />
                    {i === 0 && (
                        <div
                            className={classNames("template__symbol", {
                                ["template__symbol_helper-plus"]: isHelperAddition,
                            })}
                        >
                            {getTemplateSymbol(operation)}
                        </div>
                    )}
                </>
            ))}
        </div>
    );
};

export default BasicCalculationTemplate;
