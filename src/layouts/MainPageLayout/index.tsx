import React, { useEffect, useState } from "react";
import "./MainPageLayout.scss";
import OperationsLayout from "../OperationsLayout";
import { TemplateOperationType } from "../../components/BasicCalculationTemplate";
import ScaleSwitch from "../../components/ScaleSwitch";
import AuthLayout from "../AuthLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { isSignInWithEmailLink, signInWithEmailLink } from "@firebase/auth";
import { auth } from "../../utils/firebase";

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
    const [user, loading] = useAuthState(auth);
    const signedWithLink = isSignInWithEmailLink(auth, window.location.href);
    const [authLoading, setAuthLoading] = useState(false);
    useEffect(() => {
        checkAuth();
    }, [user, signedWithLink]);
    const checkAuth = () => {
        if (!user && signedWithLink) {
            setAuthLoading(true);
            let email = localStorage.getItem("email");
            if (!email) {
                email = window.prompt("Please provide your email for confirmation");
            }
            if (email) {
                signInWithEmailLink(auth, email, window.location.href)
                    .then(() => {
                        localStorage.removeItem("email");
                    })
                    .catch((e) => console.log(e))
                    .finally(() => setAuthLoading(false));
            }
        }
    };

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
            {!user && !loading && !authLoading && <AuthLayout />}
        </div>
    );
};

export default MainPageLayout;
