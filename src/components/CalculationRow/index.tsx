import React, { useEffect } from "react";
import "./CalculationRow.scss";
import classNames from "classnames";
import CalculationCell from "../CalculationCell/CalculationCell";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

export type RowType = "number" | "calculation" | "result" | HelperCells;
export type HelperCells = "helperForNumbers" | "helperForCalculations";

interface ICalculationRowProps {
    digitsInRow: number;
    offsetCells?: number;
    rowType: RowType;
    className?: string;
    isFocusedRow?: boolean;
    setRowFocused: () => void;
    focusNextRow: (moveFocus: "up" | "down") => void;
    onMoveToSide?: (side: "right" | "left") => void;
    isReversedRow?: boolean;
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
        onMoveToSide,
        isReversedRow,
    } = props;
    const rowCellsCount = digitsInRow + offsetCells;
    const { setActiveCell, setActiveRowLength, setActiveRowType } = useActions();

    const { activeCell, activeRowLength, activeRowType } = useTypedSelector(
        (state) => state.controll,
    );

    const onRowClick = () => {
        if (!isFocusedRow) setRowFocused();
    };

    const onRowFocused = () => {
        if (
            rowCellsCount !== activeRowLength ||
            rowType === "helperForCalculations" ||
            rowType === "helperForNumbers" ||
            isActiveRowTypeChanged()
        ) {
            let nextActiveCell = getNextActiveCellInRow();
            setActiveCell(nextActiveCell);
            const newRowType =
                rowType === "number" || rowType === "helperForNumbers" ? "numbers" : "calculations";
            setActiveRowType(newRowType);
            setActiveRowLength(rowCellsCount);
        }
    };

    const isActiveRowTypeChanged = () => {
        switch (activeRowType) {
            case "calculations":
                return rowType === "number";
            case "numbers":
                return (
                    rowType === "calculation" ||
                    rowType === "helperForCalculations" ||
                    rowType === "result"
                );
            default:
                return false;
        }
    };

    const getNextActiveCellInRow = (): number => {
        let nextActiveCell;
        if (isActiveRowTypeChanged()) {
            nextActiveCell = isReversedRow
                ? activeRowLength - 1 - activeCell
                : rowCellsCount - 1 - activeCell;
        } else {
            nextActiveCell = activeCell;
        }
        if (nextActiveCell >= rowCellsCount) {
            return rowCellsCount - 1;
        } else if (nextActiveCell < offsetCells) {
            return offsetCells;
        }
        return nextActiveCell;
    };

    useEffect(() => {
        if (!isFocusedRow) return;
        onRowFocused();
    }, [isFocusedRow]);

    const onCellClick = (index: number) => {
        onRowClick();
        setActiveRowLength(rowCellsCount);
        setActiveRowType(
            rowType === "number" || rowType === "helperForNumbers" ? "numbers" : "calculations",
        );
        setActiveCell(index);
    };
    const focuseNextCell = (moveFocus: "left" | "right") => {
        if (moveFocus === "left") {
            if (!isReversedRow) {
                if(activeCell > 0) {
                    setActiveCell(activeCell - 1)
                } else {
                    onMoveToSide && onMoveToSide(moveFocus);
                }
            } else {
                if (activeCell + 1 < rowCellsCount) {
                    setActiveCell(activeCell + 1)
                } else {
                    onMoveToSide && onMoveToSide(moveFocus);
                }
            }
        } else {
            if (!isReversedRow) {
                if(activeCell + 1 < rowCellsCount) {
                    setActiveCell(activeCell + 1)
                } else {
                    onMoveToSide && onMoveToSide(moveFocus);
                }
            } else {
                if (activeCell > offsetCells) {
                    setActiveCell(activeCell - 1)
                } else {
                    onMoveToSide && onMoveToSide(moveFocus);
                }
            }
        }
    };
    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            focusNextRow("up");
        } else if (e.key === "ArrowDown") {
            focusNextRow("down");
        }
    };

    return (
        <div className={classNames("calculationRow", className)} onKeyDown={onKeyUp}>
            {[...Array(rowCellsCount)].map((e, i) => (
                <CalculationCell
                    key={i}
                    rowType={rowType}
                    isFocused={i === activeCell && isFocusedRow}
                    focusNextCell={focuseNextCell}
                    onCellEnter={() => {
                        onCellClick(i);
                    }}
                    isOffsetCell={
                        i <= offsetCells - 1 &&
                        offsetCells !== 0 &&
                        (rowType === "calculation" || rowType === "helperForCalculations")
                    }
                />
            ))}
        </div>
    );
};

export default CalculationRow;
