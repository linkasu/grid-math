import React, { useRef } from "react";
import classNames from "classnames";
import { RowType } from "../CalculationRow";

interface ICalculationCellProps {
    rowType: RowType;
    isOffsetCell?: boolean;
}

const CalculationCell = (props: ICalculationCellProps) => {
    const { rowType, isOffsetCell } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const maxLength = rowType === "helper" ? 3 : 1;

    const controlInputValues = () => {
        const value = inputRef.current?.value;
        const pattern = rowType === "helper" ? new RegExp(/[0-9\.]/) : new RegExp(/[0-9]/);
        if (!value) return;
        if (!pattern.test(value)) {
            /* @ts-ignore*/
            inputRef.current?.value = value.slice(0, -1);
        }
    };
    return (
        <input
            type="text"
            maxLength={maxLength}
            ref={inputRef}
            onInput={controlInputValues}
            className={classNames("calculationRow__cell", {
                ["calculationRow__cell_helper"]: rowType === "helper",
                ["calculationRow__cell_result"]: rowType === "result",
                ["calculationRow__cell_offset"]: isOffsetCell,
            })}
        />
    );
};

export default CalculationCell;
