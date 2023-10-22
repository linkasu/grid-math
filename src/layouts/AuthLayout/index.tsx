import React, { FormEvent, useState } from "react";
import "./AuthLayout.scss";
import EmailInputFormGroup from "../../components/EmailInputFormGroup";
import * as EmailValidator from "email-validator";
import { sendSignInLinkToEmail } from "@firebase/auth";
import { auth } from "../../utils/firebase";

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
            const isValid = EmailValidator.validate(email.trim());
            if (isValid) {
                sendSignInLinkToEmail(auth, email, {
                    url: "http://gridmath.linka.su/",
                    handleCodeInApp: true,
                }).then(() => localStorage.setItem("email", email));
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
                    <img
                        src="https://github.com/linkasu/grid-math/blob/add-auth-layout/src/assets/branding.png?raw=true"
                        alt="branding image"
                    />
                    {isEmailSend ? (
                        <span>Мы отправили ссылку для авторизации вам на почту {email}</span>
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
