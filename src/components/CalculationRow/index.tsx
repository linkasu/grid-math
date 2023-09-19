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
    return (
        <div className={classNames("row", className)}>
            {[...Array(rowCellsCount)].map((e, i) => (
                <input
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
