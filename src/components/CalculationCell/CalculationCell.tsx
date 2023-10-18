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

    const maxLength = rowType === "helper" ? 2 : 1;

    useEffect(() => {
        if (isFocused) {
            inputRef.current?.focus();
            inputRef.current?.select();
        }
    }, [isFocused]);

    const onInput = () => {
        const value = inputRef.current?.value;
        if (!value || !value.trim()) return;
        if (!isCorrectValue(value)) {
            /* @ts-ignore*/
            inputRef.current?.value = value.slice(0, -1);
        }
        /*if (isCorrectValue(value)) {               Uncomment if autofocus after input needed
            if (rowType === "helper") return;
            focusNextCell(rowType === "number" ? "right" : "left");
        } else {
            /* @ts-ignore
            inputRef.current?.value = value.slice(0, -1);
        }*/
    };
    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowRight") {
            focusNextCell("right");
        } else if (e.key === "ArrowLeft") {
            focusNextCell("left");
        }
    };

    const isCorrectValue = (value: string): boolean => {
        const pattern = rowType === "helper" ? new RegExp(/[\d\.]$/) : new RegExp(/[0-9]/);
        return pattern.test(value) ? true : false;
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
