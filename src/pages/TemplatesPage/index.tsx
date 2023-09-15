import React, { ReactElement } from "react";
import "./TemplatesPage.scss";
import TemplatesLayout from "../../layouts/TemplatesLayout";

interface ITemplatePageProps {}

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

const TemplatesPage = (props: ITemplatePageProps) => {
    const {} = props;
    return (
        <div className="templates-page">
            {operations.map((operation, i) => (
                <section key={i}>
                    <TemplatesLayout
                        layoutTitle={operation.name}
                        template={operation.template}
                        templateWidth={operation.templateWidth}
                    />
                </section>
            ))}
        </div>
    );
};

export default TemplatesPage;
