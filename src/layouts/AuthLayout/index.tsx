import React, { useState } from "react";
import "./AuthLayout.scss";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";
import Button from "../../components/Button";
import { FormGroup } from "react-bootstrap";

const AuthLayout = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [email, setEmail] = useState("");
    return (
        isVisible && (
            <div className="auth__layout">
                <div className="auth__popup">
                    <form
                    /*onSubmit={() =>
                            sendSignInLinkToEmail(auth, email, {
                                url: "https://gridmath.linka.su/",
                                handleCodeInApp: true
                            }).then(()=>localStorage.setItem("email", email))
                        }*/
                    >
                        <span>Для начала работы, пожалуйста, введите Вашу электронную почту</span>
                        {/*<span>Мы отправили ссылку на почту</span>*/}
                        <FormGroup>
                            <input
                                placeholder="Электронная почта"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button type="submit" ariaLabel="Готово" title="Готово!" />
                        </FormGroup>
                        <button className="auth__skipButton" onClick={() => setIsVisible(false)}>Пропустить</button>
                    </form>
                </div>
            </div>
        )
    );
};

export default AuthLayout;
