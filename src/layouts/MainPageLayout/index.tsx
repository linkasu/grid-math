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
    template: ReactElement;
};

export const CALCULATED_NUMBERS_COUNT = 2;
export const MAX_CALCULATION_ROWS = 2;
export const MAX_MULTIPLICATION_CALCULATION_ROWS = 3;

const operations: Operation[] = [
    {
        name: "addition",
        title: "Сложение",
        template: <AdditionTemplate calculatedNumbersCount={CALCULATED_NUMBERS_COUNT} />,
    },
    {
        name: "subtraction",
        title: "Вычитание",
        template: <SubtractionTemplate calculatedNumbersCount={CALCULATED_NUMBERS_COUNT} />,
    },
    {
        name: "multiplication",
        title: "Умножение",
        template: <MultiplicationTemplate calculatedNumbersCount={CALCULATED_NUMBERS_COUNT} />,
    },
    {
        name: "division",
        title: "Деление",
        template: <DivisionTemplate calculatedNumbersCount={CALCULATED_NUMBERS_COUNT} />,
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
                        template={operation.template}
                    />
                </section>
            ))}
        </div>
    </div>
);

export default MainPageLayout;
