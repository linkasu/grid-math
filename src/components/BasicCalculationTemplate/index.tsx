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
    setNextBasicFocused?: (moveTo: "prev" | "next") => void;
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
        setNextBasicFocused,
        basicIndex,
    } = props;

    const needOffsetRight = isHelperCalculation && operation === "addition";
    const defaultState = isHelperCalculation && operation !== "subtraction" ? -0.5 : 0;
    const [focusedRow, setFocusedRow] = useState(defaultState);

    const defaultInterval = isHelperCalculation ? 0.5 : 1;
    const minimumRow = operation === "division" ? 0 : -0.5;

    const isResultRow = (rowId: number): boolean => {
        return rowId === calculatedNumbersCount && digitsInResult > 0;
    };
    const isFirstRow = (rowId: number): boolean => {
        return rowId === 0 && !isHelperCalculation;
    };
    const onRowClick = (rowId: number) => {
        if (!isFocusedBasic) {
            setBasicFocused && setBasicFocused();
        }
        setFocusedRow(rowId);
    };
    const moveFocusToNextRow = (moveTo: "up" | "down") =>
        moveTo === "up" ? moveFocusUp(focusedRow) : moveFocusDown(focusedRow);

    const moveFocusUp = (rowId: number) => {
        if (isFirstRow(rowId)) {
            onRowClick(rowId - 0.5);
        } else if (rowId - defaultInterval < minimumRow) {
            setNextBasicFocused && setNextBasicFocused("prev");
        } else {
            onRowClick(rowId - (isResultRow(rowId) ? 1 : defaultInterval));
        }
    };

    const moveFocusDown = (rowId: number) => {
        const resultRowCount = digitsInResult > 0 ? 1 : 0;
        if (isFirstRow(rowId + 0.5)) {
            onRowClick(rowId + 0.5);
        } else if (rowId + 1 >= calculatedNumbersCount + resultRowCount) {
            setNextBasicFocused && setNextBasicFocused("next");
        } else {
            onRowClick(rowId + (isResultRow(rowId + 1) ? 1 : defaultInterval));
        }
    };

    if (operation === "division") {
        return (
            <div className="template__division-right-side">
                <CalculationRow
                    rowType="number"
                    digitsInRow={digitsInRow}
                    isFocusedRow={0 === focusedRow && isFocusedBasic}
                    setRowFocused={() => onRowClick(0)}
                    focusNextRow={moveFocusToNextRow}
                />
                <div className="template__division-divide-line"></div>
                <CalculationRow
                    rowType="result"
                    digitsInRow={digitsInRow}
                    isFocusedRow={1 === focusedRow && isFocusedBasic}
                    setRowFocused={() => onRowClick(1)}
                    focusNextRow={moveFocusToNextRow}
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
                            offsetCells={needOffsetRight ? i : 0}
                            isFocusedRow={i - 0.5 === focusedRow && isFocusedBasic}
                            setRowFocused={() => onRowClick(i - 0.5)}
                            focusNextRow={moveFocusToNextRow}
                        />
                    )}
                    <CalculationRow
                        digitsInRow={digitsInRow}
                        rowType={basicIndex > 0 ? "calculation" : "number"}
                        className={classNames({
                            ["calculationRow_last"]: i + 1 === calculatedNumbersCount,
                        })}
                        offsetCells={needOffsetRight && i !== calculatedNumbersCount ? i : 0}
                        isFocusedRow={i === focusedRow && isFocusedBasic}
                        setRowFocused={() => onRowClick(i)}
                        focusNextRow={moveFocusToNextRow}
                    />
                    {i === 0 && (
                        <div
                            className={classNames("template__symbol", {
                                ["template__symbol_plus"]: operation === "addition",
                                ["template__symbol_plus-helper"]: needOffsetRight,
                            })}
                        >
                            {getTemplateSymbol(operation)}
                        </div>
                    )}
                    {isResultRow(i + 1) && (
                        <CalculationRow
                            isFocusedRow={i + 1 === focusedRow && isFocusedBasic}
                            rowType={"result"}
                            digitsInRow={digitsInResult}
                            setRowFocused={() => onRowClick(i + 1)}
                            focusNextRow={moveFocusToNextRow}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default BasicCalculationTemplate;
