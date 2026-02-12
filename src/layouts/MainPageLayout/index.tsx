import React from "react";
import "./MainPageLayout.scss";
import OperationsLayout from "../OperationsLayout";
import { TemplateOperationType } from "../../components/BasicCalculationTemplate";
import SettingsPanel from "../../components/SettingsPanel";

export type Operation = {
    name: TemplateOperationType;
    title: string;
};

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

const MainPageLayout = () => {
    return (
        <div className="relative-background">
            <SettingsPanel />
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
};

export default MainPageLayout;
