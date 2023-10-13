import React, { useEffect } from "react";
import "./CalculationRow.scss";
import classNames from "classnames";
import CalculationCell from "../CalculationCell/CalculationCell";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

export type RowType = "number" | "calculation" | "helper" | "result";

interface ICalculationRowProps {
    digitsInRow: number;
    offsetCells?: number;
    rowType: RowType;
    className?: string;
    isFocusedRow?: boolean;
    setRowFocused: () => void;
    focusNextRow: (moveFocus: "up" | "down") => void;
    onMoveToSide?: (side: "right" | "left") => void;
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
    } = props;
    const rowCellsCount = digitsInRow + offsetCells;
    const { setActiveCell, setActiveRowLength } = useActions();

    const { activeCell, activeRowLength } = useTypedSelector((state) => state.controll);

    const onRowClick = () => {
        if (!isFocusedRow) setRowFocused();
    };

    const onRowFocused = () => {
        if (rowCellsCount !== activeRowLength || rowType==="helper") {
            setActiveCell(getNextActiveCellInRow());
            setActiveRowLength(rowCellsCount);
        }
    };

    const getNextActiveCellInRow = (): number => {
        const nextActiveCell = activeCell + (rowCellsCount - activeRowLength);
        if (nextActiveCell >= digitsInRow) {
            return digitsInRow - 1;
        } else if (nextActiveCell < 0) {
            return 0;
        } else if (rowType==="helper" && nextActiveCell >= digitsInRow ) {
            return digitsInRow-2;
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
        setActiveCell(index);
    };
    const focuseNextCell = (moveFocus: "left" | "right") => {
        if (moveFocus === "left") {
            if (activeCell > 0) {
                setActiveCell(activeCell - 1);
            } else {
                onMoveToSide && onMoveToSide(moveFocus);
            }
        } else {
            if (activeCell + 1 < digitsInRow) {
                setActiveCell(activeCell + 1);
            } else {
                onMoveToSide && onMoveToSide(moveFocus);
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
                        (i >= rowCellsCount - offsetCells && offsetCells !== 0) ||
                        (i === rowCellsCount && rowType === "helper")
                    }
                />
            ))}
        </div>
    );
};

export default CalculationRow;
