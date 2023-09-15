import React, { ReactElement } from "react";
import "./MainPageLayout.scss";
import OperationsLayout from "../OperationsLayout";

export type Operation = {
    name: string;
    template: ReactElement;
    templateWidth: 25 | 50;
};

const operations: Operation[] = [
    {
        name: "Сложение",
        template: <div>Plus</div>,
        templateWidth: 25,
    },
    {
        name: "Вычитание",
        template: <div>Minus</div>,
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
