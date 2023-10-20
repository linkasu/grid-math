import React, { FormEvent, useState } from "react";
import "./AuthLayout.scss";
import EmailInputFormGroup from "../../components/EmailInputFormGroup";
import * as EmailValidator from "email-validator";

const AuthLayout = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [email, setEmail] = useState("");
    const [errorText, setErrorText] = useState("");
    const [isEmailSend, setIsEmailSend] = useState(false);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (email.trim().length === 0) {
            setErrorText("Пожалуйста, заполните поле");
        } else {
            const validator = require("validator");
            const isValid = EmailValidator.validate(email.trim());
            if (isValid) {
                console.log(true);
                /*sendSignInLinkToEmail(auth, email, {
                    url: "https://gridmath.linka.su/",
                    handleCodeInApp: true,
                }).then(() => localStorage.setItem("email", email))*/
                setIsEmailSend(true);
            } else {
                setErrorText("Почта введена некорректно");
            }
        }
    };
    return (
        isVisible && (
            <div className="auth__layout">
                <div className="auth__popup">
                    {isEmailSend ? (
                        <span>Мы отправили ссылку для авторизации вам на почту</span>
                    ) : (
                        <>
                            <span>
                                Для начала работы, пожалуйста, введите вашу электронную почту
                            </span>
                            <form onSubmit={onSubmit}>
                                <EmailInputFormGroup
                                    onChange={(email) => {
                                        setErrorText("");
                                        setEmail(email);
                                    }}
                                    errorText={errorText}
                                />
                                <div className="auth__formGroup">
                                    <button
                                        className="auth__skipButton"
                                        onClick={() => setIsVisible(false)}
                                    >
                                        Пропустить
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        )
    );
};

export default AuthLayout;
