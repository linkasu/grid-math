import React from "react";
import "./TableLayout.scss";
import GridTable from "../../components/GridTable/GridTable";
import ScaleSwitch from "../../components/ScaleSwitch";

const TableLayout = () => {
    return (
        <>
            <ScaleSwitch />
            <GridTable />
        </>
    );
};

export default TableLayout;
