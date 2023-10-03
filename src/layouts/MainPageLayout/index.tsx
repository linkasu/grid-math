import React, { ReactElement } from "react";
import "./MainPageLayout.scss";
import OperationsLayout from "../OperationsLayout";
import AdditionTemplate from "../../components/AdditionTemplate";
import SubtractionTemplate from "../../components/SubtractionTemplate";
import MultiplicationTemplate from "../../components/MultiplicationTemplate";
import { OperationType } from "../../components/BasicCalculationTemplate";
import DivisionTemplate from "../../components/DivisionTemplate";
import ScaleSwitch from "../../components/ScaleSwitch";

export type Operation = {
    name: OperationType;
    title: string;
};

export const CALCULATED_NUMBERS_COUNT = 2;
export const MAX_CALCULATION_ROWS = 2;
export const MAX_MULTIPLICATION_CALCULATION_ROWS = 3;

const operations: Operation[] = [
    {
        name: "addition",
        title: "Сложение",
    },
    {
        name: "subtraction",
        title: "Вычитание",
    },
    {
        name: "multiplication",
        title: "Умножение",
    },
    {
        name: "division",
        title: "Деление",
    },
];

const MainPageLayout = () => (
    <div className="relative-background">
        <ScaleSwitch />
        <div className="templates-page" id="templates-page">
            {operations.map((operation, i) => (
                <section key={i}>
                    <OperationsLayout
                        operationType={operation.name}
                        layoutTitle={operation.title}
                    />
                </section>
            ))}
        </div>
    </div>
);

export default MainPageLayout;
