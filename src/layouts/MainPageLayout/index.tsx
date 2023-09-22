import React, { ReactElement } from "react";
import "./MainPageLayout.scss";
import OperationsLayout from "../OperationsLayout";
import AdditionTemplate from "../../components/AdditionTemplate";
import SubtractionTemplate from "../../components/SubtractionTemplate";
import MultiplicationTemplate from "../../components/MultiplicationTemplate";
import { OperationType } from "../../components/BasicCalculationTemplate";
import DivisionTemplate from "../../components/DivisionTemplate";
import { TemplateWidth } from "../../components/TemplateContainer";

export type Operation = {
    name: OperationType;
    title: string;
    template: ReactElement;
    templateWidth: TemplateWidth;
};

export const CALCULATED_NUMBERS_COUNT = 2;
export const MAX_CALCULATION_ROWS = 2;
export const MAX_MULTIPLICATION_CALCULATION_ROWS = 3;

const operations: Operation[] = [
    {
        name: "addition",
        title: "Сложение",
        template: <AdditionTemplate calculatedNumbersCount={CALCULATED_NUMBERS_COUNT} />,
        templateWidth: 25,
    },
    {
        name: "subtraction",
        title: "Вычитание",
        template: <SubtractionTemplate calculatedNumbersCount={CALCULATED_NUMBERS_COUNT} />,
        templateWidth: 25,
    },
    {
        name: "multiplication",
        title: "Умножение",
        template: <MultiplicationTemplate calculatedNumbersCount={CALCULATED_NUMBERS_COUNT} />,
        templateWidth: 33,
    },
    {
        name: "division",
        title: "Деление",
        template: <DivisionTemplate calculatedNumbersCount={CALCULATED_NUMBERS_COUNT} />,
        templateWidth: 50,
    },
];

const MainPageLayout = () => (
    <div className="templates-page">
        {operations.map((operation, i) => (
            <section key={i}>
                <OperationsLayout
                    operationType={operation.name}
                    layoutTitle={operation.title}
                    template={operation.template}
                    templateWidth={operation.templateWidth}
                />
            </section>
        ))}
    </div>
);

export default MainPageLayout;
