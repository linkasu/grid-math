import React, { useState } from "react";
import "./CalculationRow.scss";
import classNames from "classnames";
import CalculationCell from "../CalculationCell/CalculationCell";

export type RowType = "number" | "calculation" | "helper" | "result";

interface ICalculationRowProps {
    digitsInRow: number;
    offsetCells?: number;
    rowType: RowType;
    className?: string;
    isFocusedRow?: boolean;
    setRowFocused: () => void;
    focusNextRow: (moveFocus: "up" | "down") => void;
}

const CalculationRow = (props: ICalculationRowProps) => {
    const {
        digitsInRow,
        offsetCells = 0,
        rowType,
        className,
        isFocusedRow = false,
        setRowFocused,
        focusNextRow,
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
    const focuseNextCell = (moveFocus: "left" | "right") => {
        if (moveFocus === "left") {
            if (focusedCellIndex > 0) {
                setFocusedCellIndex((prev) => prev - 1);
            }
        } else {
            if (focusedCellIndex + 1 < rowCellsCount) {
                setFocusedCellIndex((prev) => prev + 1);
            }
        }
    };
    const onKeyUp = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="ArrowUp") {
            focusNextRow("up");
            changeFocusedCell(focusedCellIndex)
        } else if (e.key==="ArrowDown") {
            focusNextRow("down");
            changeFocusedCell(focusedCellIndex)
        }
    }
    return (
        <div className={classNames("calculationRow", className)} onKeyDown={onKeyUp}>
            {[...Array(rowCellsCount)].map((e, i) => (
                <CalculationCell
                    key={i}
                    rowType={rowType}
                    isFocused={i === focusedCellIndex && isFocusedRow}
                    focusNextCell={focuseNextCell}
                    onCellEnter={() => {
                        onCellClick(i);
                    }}
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
