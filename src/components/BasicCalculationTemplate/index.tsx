import React, { useState } from "react";
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
    digitsInResult?: number;
    isFocusedBasic?: boolean;
    setBasicFocused?: () => void;
    basicIndex: number;
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
    const {
        operation,
        digitsInRow,
        calculatedNumbersCount,
        isHelperCalculation = false,
        digitsInResult = 0,
        isFocusedBasic = false,
        setBasicFocused,
        basicIndex,
    } = props;
    const [focusedRow, setFocusedRow] = useState(0);
    const isHelperAddition = isHelperCalculation && operation === "addition";
    const onRowClick = (rowId: number) => {
        if (!isFocusedBasic) {
            setBasicFocused && setBasicFocused();
        }
        setFocusedRow(rowId);
    };

    if (operation === "division") {
        return (
            <div className="template__division-right-side">
                <CalculationRow
                    rowType="number"
                    digitsInRow={digitsInRow}
                    isFocusedRow={calculatedNumbersCount + 1 === focusedRow && isFocusedBasic}
                    setRowFocused={() => onRowClick(calculatedNumbersCount + 1)}
                />
                <div className="template__division-divide-line"></div>
                <CalculationRow
                    rowType="result"
                    digitsInRow={digitsInRow}
                    isFocusedRow={calculatedNumbersCount + 2 === focusedRow && isFocusedBasic}
                    setRowFocused={() => onRowClick(calculatedNumbersCount + 2)}
                />
            </div>
        );
    }

    return (
        <div className="template__calculation">
            {[...Array(calculatedNumbersCount)].map((e, i) => (
                <div key={`${operation}-${i}`}>
                    {(i === 0 || isHelperCalculation) && i !== calculatedNumbersCount && (
                        <CalculationRow
                            digitsInRow={digitsInRow}
                            rowType={"helper"}
                            offsetCells={isHelperAddition ? i : 0}
                            isFocusedRow={i === focusedRow && isFocusedBasic}
                            setRowFocused={() => onRowClick(i)}
                        />
                    )}
                    <CalculationRow
                        digitsInRow={digitsInRow}
                        rowType={basicIndex > 0 ? "calculation" : "number"}
                        className={classNames({
                            ["calculationRow_last"]: i + 1 === calculatedNumbersCount,
                        })}
                        offsetCells={isHelperAddition && i !== calculatedNumbersCount ? i : 0}
                        isFocusedRow={i === focusedRow && isFocusedBasic}
                        setRowFocused={() => onRowClick(i)}
                    />
                    {i === 0 && (
                        <div
                            className={classNames("template__symbol", {
                                ["template__symbol_plus"]: operation === "addition",
                                ["template__symbol_plus-helper"]: isHelperAddition,
                            })}
                        >
                            {getTemplateSymbol(operation)}
                        </div>
                    )}
                    {i + 1 === calculatedNumbersCount && digitsInResult > 0 && (
                        <CalculationRow
                            isFocusedRow={i + 1 === focusedRow && isFocusedBasic}
                            rowType="result"
                            digitsInRow={digitsInResult}
                            setRowFocused={() => onRowClick(i + 1)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default BasicCalculationTemplate;
