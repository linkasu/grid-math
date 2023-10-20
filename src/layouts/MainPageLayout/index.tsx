import React from "react";
import "./MainPageLayout.scss";
import OperationsLayout from "../OperationsLayout";
import { OperationType } from "../../components/BasicCalculationTemplate";
import ScaleSwitch from "../../components/ScaleSwitch";
import AuthLayout from "../AuthLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/FirebaseConfig";

export type Operation = {
    name: OperationType;
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
    const [user] = useAuthState(auth);
    return (
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
            {!user && <AuthLayout></AuthLayout>}
        </div>
    );
};

export default MainPageLayout;
