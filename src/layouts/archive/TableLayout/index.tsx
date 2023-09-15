import React from "react";
import "./TableLayout.scss";
import GridTable from "../../../components/archive/GridTable/GridTable";
import ScaleSwitch from "../../../components/archive/ScaleSwitch";

const TableLayout = () => {
    return (
        <>
            <ScaleSwitch />
            <GridTable />
        </>
    );
};

export default TableLayout;
