import React from "react";
import "./EmailInputFormGroup.scss";
import ErrorIcon from "../../icons/ErrorIcon";
import Button from "../../ui/Button";

interface IEmailInputFormGroupProps {
    onChange: (email: string) => void;
    errorText?: string;
}

const EmailInputFormGroup = (props: IEmailInputFormGroupProps) => {
    const { onChange, errorText } = props;
    return (
        <div className="emailInput__formGroup">
            <div className="emailInput">
                {errorText && (
                    <div className="emailInput__error">
                        <ErrorIcon />
                        <span>{errorText}</span>
                    </div>
                )}
                <input
                    id="email"
                    placeholder="Электронная почта"
                    //type="email"
                    onChange={(e) => onChange(e.target.value)}
                />
                <label htmlFor="email">Электронная почта</label>
            </div>
            <Button
                type="submit"
                ariaLabel="Готово"
                title="Готово!"
                buttonClass="emailInput__sendButton"
            />
        </div>
    );
};

export default EmailInputFormGroup;
