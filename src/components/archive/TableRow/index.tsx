import React from "react";
import Cell from "../TableCell";

interface ITableRowProps {
    rowNumber: number;
    cellsCount: number;
}

const TableRow = (props: ITableRowProps) => {
    const { rowNumber, cellsCount } = props;
    const getTableData = () => {
        const indents = [];
        for (let i = 0; i < cellsCount; i++) {
            indents.push(<Cell key={`cell-${rowNumber}.${i}`} parity={i % 2 === 0 ? "even" : "odd"} />);
        }
        return indents.map((i) => i);
    };
    return <tr>{getTableData()}</tr>;
};

export default TableRow;
