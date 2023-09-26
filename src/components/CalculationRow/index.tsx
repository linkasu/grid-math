import React, { SyntheticEvent } from "react";
import "./CalculationRow.scss";
import classNames from "classnames";
import CalculationCell from "../CalculationCell/CalculationCell";

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
        <div className={classNames("calculationRow", className)}>
            {[...Array(rowCellsCount)].map((e, i) => (
                <CalculationCell
                    key={i}
                    rowType={rowType}
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
