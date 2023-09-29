import React, { useState } from "react";
import "./CalculationRow.scss";
import classNames from "classnames";
import CalculationCell from "../CalculationCell/CalculationCell";

export type RowType = "calculation" | "helper" | "result";

interface ICalculationRowProps {
    digitsInRow: number;
    offsetCells?: number;
    rowType: RowType;
    className?: string;
    isFocusedRow?: boolean;
    setRowFocused: () => void;
}

const CalculationRow = (props: ICalculationRowProps) => {
    const {
        digitsInRow,
        offsetCells = 0,
        rowType,
        className,
        isFocusedRow = false,
        setRowFocused,
    } = props;
    const rowCellsCount = digitsInRow + offsetCells;

    const onRowClick = () => {
        if (!isFocusedRow) setRowFocused();
    };

    const [focusedCellIndex, setFocusedCellIndex] = useState(0);
    const onCellClick = (index: number) => {
        onRowClick();
        changeFocusedCell(index);
    };
    const changeFocusedCell = (index: number) => setFocusedCellIndex(index);
    const focuseNextCell = () => setFocusedCellIndex((prev) => prev + 1);
    return (
        <div className={classNames("calculationRow", className)}>
            {[...Array(rowCellsCount)].map((e, i) => (
                <CalculationCell
                    key={i}
                    rowType={rowType}
                    isFocused={i === focusedCellIndex && isFocusedRow}
                    focusNextCell={focuseNextCell}
                    onCellEnter={() => onCellClick(i)}
                    isOffsetCell={
                        (i >= rowCellsCount - offsetCells && offsetCells !== 0) ||
                        (i === rowCellsCount && rowType === "helper")
                    }
                />
            ))}
        </div>
    );
};

export default CalculationRow;
