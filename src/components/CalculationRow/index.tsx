import React from "react";
import "./CalculationRow.scss";
import classNames from "classnames";

export type RowType = "calculation" | "helper" | "result";

interface ICalculationRowProps {
    digitsInRow: number;
    offsetCells?: number;
    rowType: RowType;
    className?: string;
}

const CalculationRow = (props: ICalculationRowProps) => {
    const { digitsInRow, offsetCells = 0, rowType, className } = props;
    const rowCellsCount = digitsInRow + offsetCells;
    const maxValue = rowType === "helper" ? 999 : 9;
    const minValue = rowType === "helper" ? 1 : 0;
    return (
        <div className={classNames("row", className)}>
            {[...Array(rowCellsCount)].map((e, i) => (
                <input
                    max={maxValue}
                    min={minValue}
                    //maxLength={1}
                    //pattern="/d*"
                    type="number"
                    className={classNames("row__cell", {
                        ["row__cell_helper"]: rowType === "helper",
                        ["row__cell_result"]: rowType === "result",
                        ["row__cell_offset"]:
                            (i >= rowCellsCount - offsetCells && offsetCells !== 0) ||
                            (i === rowCellsCount - 1 && rowType === "helper"),
                    })}
                    key={i}
                />
            ))}
        </div>
    );
};

export default CalculationRow;
