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
    const { setActiveCell } = useActions();

    const { activeCell } = useTypedSelector((state) => state.controll);

    const onRowClick = () => {
        if (!isFocusedRow) setRowFocused();
    };

    useEffect(() => {
        if (isFocusedRow && activeCell + 1 > digitsInRow) {
            setActiveCell(digitsInRow - 1);
        }
    }, [isFocusedRow]);

    const onCellClick = (index: number) => {
        onRowClick();
        setActiveCell(index);
    };
    const focuseNextCell = (moveFocus: "left" | "right") => {
        if (moveFocus === "left") {
            if (activeCell > 0) {
                setActiveCell(activeCell - 1);
            }
        } else {
            if (activeCell + 1 < digitsInRow) {
                setActiveCell(activeCell + 1);
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
