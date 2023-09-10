import React from "react";

interface ITableCellProps {
    parity: "even" | "odd";
}

export const defaultCellWidth = 24;
export const defaultCellHeight = 32;
export const defaultGap = 12;

const TableCell = (props: ITableCellProps) => {
    const { parity } = props;
    return (
        <td>
            <input maxLength={1}/>
        </td>
    );
};

export default TableCell;
