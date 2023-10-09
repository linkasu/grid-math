import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { RowType } from "../CalculationRow";

interface ICalculationCellProps {
    rowType: RowType;
    isOffsetCell?: boolean;
    isFocused?: boolean;
    onCellEnter: () => void;
    focusNextCell: (moveTo: "right" | "left") => void;
}

const CalculationCell = (props: ICalculationCellProps) => {
    const { rowType, isOffsetCell = false, isFocused = false, onCellEnter, focusNextCell } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const maxLength = rowType === "helper" ? 3 : 1;

    useEffect(() => {
        if (isFocused) {
            inputRef.current?.focus();
        }
    }, [isFocused]);

    const onInput = () => {
        const value = inputRef.current?.value;
        if (!value || !value.trim()) return;
        controlInputValues(value);
        if (rowType === "helper") return;
        focusNextCell(rowType === "number" ? "right" : "left");
    };
    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowRight") {
            focusNextCell("right");
        } else if (e.key === "ArrowLeft") {
            focusNextCell("left");
        }
    };

    const controlInputValues = (value: string) => {
        const pattern = rowType === "helper" ? new RegExp(/[0-9\.]/) : new RegExp(/[0-9]/);

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
            autoFocus={isFocused}
            onInput={onInput}
            onKeyDown={onKeyUp}
            onFocus={onCellEnter}
            className={classNames("calculationRow__cell", {
                ["calculationRow__cell_helper"]: rowType === "helper",
                ["calculationRow__cell_result"]: rowType === "result",
                ["calculationRow__cell_offset"]: isOffsetCell,
            })}
        />
    );
};

export default CalculationCell;
