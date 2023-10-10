import React, { useState } from "react";
import "./BasicCalculationTemplate.scss";
import classNames from "classnames";
import PlusIcon from "../../icons/PlusIcon";
import MinusIcon from "../../icons/MinusIcon";
import MultiplyIcon from "../../icons/MultiplyIcon";
import CalculationRow from "../CalculationRow";
import DivideIcon from "../../icons/DivideIcon";
import { IBasic } from "../../types/templatesTypes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

export type OperationType = "addition" | "subtraction" | "multiplication" | "division";

interface IBasicCalculationTemplateProps {
    basic: IBasic;
    basicIndex: number;
    onMoveToSide?: (side: "right" | "left") => void;
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
    const { basic, basicIndex, onMoveToSide } = props;

    const {
        id,
        operation,
        digitsInRow,
        calculatedNumbersCount,
        isHelperCalculation = false,
        digitsInResult = 0,
    } = basic;

    const needOffsetRight = isHelperCalculation && operation === "addition";
    const defaultState = isHelperCalculation && operation !== "subtraction" ? -0.5 : 0;
    const [focusedRow, setFocusedRow] = useState(defaultState);

    const { activeBasic } = useTypedSelector((state) => state.controll);
    const { setActiveBasic, setNextBasic, setPreviosBasic } = useActions();

    const defaultInterval = isHelperCalculation ? 0.5 : 1;
    const minimumRow = operation === "division" ? 0 : -0.5;

    const isResultRow = (rowId: number): boolean => {
        return rowId === calculatedNumbersCount && digitsInResult > 0;
    };
    const isFirstRow = (rowId: number): boolean => {
        return rowId === 0 && !isHelperCalculation;
    };
    const onRowClick = (rowId: number) => {
        if (activeBasic !== id) {
            setActiveBasic(id);
        }
        setFocusedRow(rowId);
    };
    const moveFocusToNextRow = (moveTo: "up" | "down") =>
        moveTo === "up" ? moveFocusUp(focusedRow) : moveFocusDown(focusedRow);

    const moveFocusUp = (rowId: number) => {
        if (isFirstRow(rowId)) {
            onRowClick(rowId - 0.5);
        } else if (rowId - defaultInterval < minimumRow) {
            setPreviosBasic(id);
        } else {
            onRowClick(rowId - (isResultRow(rowId) ? 1 : defaultInterval));
        }
    };

    const moveFocusDown = (rowId: number) => {
        const resultRowCount = digitsInResult > 0 ? 1 : 0;
        if (isFirstRow(rowId + 0.5)) {
            onRowClick(rowId + 0.5);
        } else if (rowId + 1 >= calculatedNumbersCount + resultRowCount) {
            setNextBasic(id);
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
                    isFocusedRow={0 === focusedRow && activeBasic === id}
                    setRowFocused={() => onRowClick(0)}
                    focusNextRow={moveFocusToNextRow}
                    onMoveToSide={onMoveToSide}
                />
                <div className="template__division-divide-line"></div>
                <CalculationRow
                    rowType="result"
                    digitsInRow={digitsInRow}
                    isFocusedRow={1 === focusedRow && activeBasic === id}
                    setRowFocused={() => onRowClick(1)}
                    focusNextRow={moveFocusToNextRow}
                    onMoveToSide={onMoveToSide}
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
                            isFocusedRow={i - 0.5 === focusedRow && activeBasic === id}
                            setRowFocused={() => onRowClick(i - 0.5)}
                            focusNextRow={moveFocusToNextRow}
                            onMoveToSide={onMoveToSide}
                        />
                    )}
                    <CalculationRow
                        digitsInRow={digitsInRow}
                        rowType={basicIndex > 0 ? "calculation" : "number"}
                        className={classNames({
                            ["calculationRow_last"]: i + 1 === calculatedNumbersCount,
                        })}
                        offsetCells={needOffsetRight && i !== calculatedNumbersCount ? i : 0}
                        isFocusedRow={i === focusedRow && activeBasic === id}
                        setRowFocused={() => onRowClick(i)}
                        focusNextRow={moveFocusToNextRow}
                        onMoveToSide={onMoveToSide}
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
                            isFocusedRow={i + 1 === focusedRow && activeBasic === id}
                            rowType={"result"}
                            digitsInRow={digitsInResult}
                            setRowFocused={() => onRowClick(i + 1)}
                            focusNextRow={moveFocusToNextRow}
                            onMoveToSide={onMoveToSide}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default BasicCalculationTemplate;
