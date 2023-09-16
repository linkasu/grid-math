import React, { ReactElement } from "react";
import "./MainPageLayout.scss";
import OperationsLayout from "../OperationsLayout";
import Template from "../../components/Template";

export type Operation = {
    name: string;
    template: ReactElement;
    templateWidth: 25 | 50;
};

export const MAX_DIGIT_NUMBER = 5;
export const MAX_CALCULATION_ROWS = 2;
export const MAX_MULTIPLICATION_DIGIT_NUMBER = 3;
export const MAX_MULTIPLICATION_CALCULATION_ROWS = 3;

const operations: Operation[] = [
    {
        name: "Сложение",
        template: (
            <Template
                operation="addition"
                digitsInRow={MAX_DIGIT_NUMBER}
                calculationRowsCount={MAX_CALCULATION_ROWS}
            />
        ),
        templateWidth: 25,
    },
    {
        name: "Вычитание",
        template: (
            <Template
                operation="subtraction"
                digitsInRow={MAX_DIGIT_NUMBER}
                calculationRowsCount={MAX_CALCULATION_ROWS}
            />
        ),
        templateWidth: 25,
    },
    {
        name: "Умножение",
        template: <div>Multiply</div>,
        templateWidth: 25,
    },
    {
        name: "Деление",
        template: <div>Divide</div>,
        templateWidth: 50,
    },
];

const MainPageLayout = () => (
    <div className="templates-page">
        {operations.map((operation, i) => (
            <section key={i}>
                <OperationsLayout
                    layoutTitle={operation.name}
                    template={operation.template}
                    templateWidth={operation.templateWidth}
                />
            </section>
        ))}
    </div>
);

export default MainPageLayout;
