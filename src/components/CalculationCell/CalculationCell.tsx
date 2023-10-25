import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { RowType } from "../CalculationRow";
import { useTypedSelector } from "../../hooks/useTypedSelector";

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
    const { paintMode } = useTypedSelector((state) => state.settings);
    const [isPainted, setIsPainted] = useState(false);

    const maxLength = rowType === "helper" ? 2 : 1;

    useEffect(() => {
        if (isFocused) {
            if (!inputRef.current) return;
            inputRef.current.focus();
        }
    }, [isFocused]);

    const onInput = () => {
        if (!inputRef.current) return;
        const value = inputRef.current.value;
        if (!value || !value.trim()) return;
        /* Uncomment if autofocus after input not needed
        if (!isCorrectValue(value)) {
            /* @ts-ignore
            inputRef.current.value = value.slice(0, -1);
        }*/
        if (isCorrectValue(value)) {
            if (rowType === "helper") return;
            focusNextCell(rowType === "number" ? "right" : "left");
        } else {
            /* @ts-ignore*/
            inputRef.current?.value = value.slice(0, -1);
        }
    };
    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const input = inputRef.current;
        if (!input) return;
        if (e.key === "Enter") {
            onCellClick();
        }
        if (e.key === "ArrowRight") {
            if (input.selectionStart === input.value.length) {
                e.preventDefault();
                focusNextCell("right");
            }
        } else if (e.key === "ArrowLeft") {
            if (rowType === "helper" && input.selectionStart === 0) {
                e.preventDefault();
                focusNextCell("left");
            } else if (rowType !== "helper") {
                e.preventDefault();
                focusNextCell("left");
            }
        }
    };

    const onCellClick = () => {
        if (paintMode && rowType !== "helper") {
            setIsPainted((prev) => !prev);
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
            onClick={onCellClick}
            className={classNames("calculationRow__cell", {
                ["calculationRow__cell_helper"]: rowType === "helper",
                ["calculationRow__cell_result"]: rowType === "result",
                ["calculationRow__cell_offset"]: isOffsetCell,
                ["calculationRow__cell_paintMode"]: paintMode && rowType !== "helper",
                ["calculationRow__cell_painted"]: isPainted && rowType !== "helper",
            })}
        />
    );
};

export default CalculationCell;
