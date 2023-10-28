import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RowType } from "../CalculationRow";

export type CellType = RowType | "offset";

interface ICalculationCellProps {
    cellType: CellType;
    isFocused?: boolean;
    autoFocusMove: "left" | "right";
    onCellEnter: () => void;
    focusNextCell: (moveTo: "right" | "left") => void;
}

const CalculationCell = (props: ICalculationCellProps) => {
    const { isFocused = false, onCellEnter, focusNextCell, cellType, autoFocusMove } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const { paintMode } = useTypedSelector((state) => state.settings);
    const [isPainted, setIsPainted] = useState(false);

    const maxLength = cellType === "helper" ? 2 : 1;

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
            if (cellType === "helper") return;
            focusNextCell(autoFocusMove);
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
            if (cellType === "helper" && input.selectionStart === 0) {
                e.preventDefault();
                focusNextCell("left");
            } else if (cellType !== "helper") {
                e.preventDefault();
                focusNextCell("left");
            }
        }
    };

    const onCellClick = () => {
        if (paintMode && cellType !== "helper") {
            setIsPainted((prev) => !prev);
        }
    };

    const isCorrectValue = (value: string): boolean => {
        const pattern = cellType === "helper" ? new RegExp(/[\d\.]$/) : new RegExp(/[0-9]/);
        return pattern.test(value) ? true : false;
    };

    return (
        <input
            type="text"
            maxLength={maxLength}
            disabled={cellType === "offset"}
            ref={inputRef}
            autoFocus={isFocused}
            onInput={onInput}
            onKeyDown={onKeyUp}
            onFocus={onCellEnter}
            onClick={onCellClick}
            className={classNames("calculationRow__cell", {
                ["calculationRow__cell_helper"]: cellType === "helper",
                ["calculationRow__cell_result"]: cellType === "result",
                ["calculationRow__cell_offset"]: cellType === "offset",
                ["calculationRow__cell_paintMode"]: paintMode && cellType !== "helper",
                ["calculationRow__cell_painted"]: isPainted && cellType !== "helper",
            })}
        />
    );
};

export default CalculationCell;
