import React, { useEffect, useMemo, useState } from "react";
import { defaultCellHeight, defaultCellWidth, defaultGap } from "../TableCell";
import TableRow from "../TableRow";

const GridTable = () => {
    const [tableSize, setTableSize] = useState({ rowsCount: 0, columnsCount: 0 });
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    useEffect(() => {
        getTableSizes;
    }, []);

    const getTableSizes = useMemo(() => {
        setTableSize({
            rowsCount: Math.ceil(screenHeight / (defaultCellHeight + defaultGap)),
            columnsCount: Math.ceil(screenWidth / (defaultCellWidth + defaultGap)),
        });
    }, [screenWidth, screenHeight]);

    const getTableRows = () => {
        const rowsElementsArray = [];
        for (let i = 0; i < tableSize.rowsCount * 2; i++) {
            rowsElementsArray.push(
                <TableRow key={`row-${i}`} rowNumber={i} cellsCount={tableSize.columnsCount * 2} />,
            );
        }
        return rowsElementsArray;
    };

    return (
        <table className="gridTable">
            <tbody>{getTableRows().map((rowEl) => rowEl)}</tbody>
        </table>
    );
};

export default GridTable;
