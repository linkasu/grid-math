import React, { useState } from "react";
import { OperationType } from "../BasicCalculationTemplate";
import AdditionTemplate from "../AdditionTemplate";
import SubtractionTemplate from "../SubtractionTemplate";
import MultiplicationTemplate from "../MultiplicationTemplate";
import DivisionTemplate from "../DivisionTemplate";
import { useActions } from "../../hooks/useActions";

export type TemplateProps = {
    operation: OperationType;
    id: string;
    isFocusedTemplate: boolean;
};

export type TemplateType = {
    focusedBasic: number;
    onNextBasic: (moveTo: "next" | "prev") => void;
    setBasicFocused: (basicId: number) => void;
    isFocusedTemplate?: boolean;
};

const Template = (props: TemplateProps) => {
    const { operation } = props;
    const [focusedBasic, setFocusedBasic] = useState(0);
    const { setActiveTemplate } = useActions();
    const setNextBasicFocused = (moveTo: "next" | "prev") => {
        if (moveTo === "prev") {
            setFocusedBasic((prev) => prev - 1);
        } else if (moveTo === "next") {
            setFocusedBasic((prev) => prev + 1);
        }
    };

    const onTemplateClick = () => {
        if (!props.isFocusedTemplate) {
            setActiveTemplate(props.id);
        }
    };

    const getOperationTemplate = (): React.JSX.Element => {
        switch (operation) {
            case "addition":
                return (
                    <AdditionTemplate
                        isFocusedTemplate={props.isFocusedTemplate}
                        focusedBasic={focusedBasic}
                        onNextBasic={setNextBasicFocused}
                        setBasicFocused={(basicId: number) => setFocusedBasic(basicId)}
                    />
                );
            case "subtraction":
                return (
                    <SubtractionTemplate
                        isFocusedTemplate={props.isFocusedTemplate}
                        focusedBasic={focusedBasic}
                        onNextBasic={setNextBasicFocused}
                        setBasicFocused={(basicId: number) => setFocusedBasic(basicId)}
                    />
                );
            case "multiplication":
                return (
                    <MultiplicationTemplate
                        isFocusedTemplate={props.isFocusedTemplate}
                        focusedBasic={focusedBasic}
                        onNextBasic={setNextBasicFocused}
                        setBasicFocused={(basicId: number) => setFocusedBasic(basicId)}
                    />
                );
            case "division":
                return (
                    <DivisionTemplate
                        isFocusedTemplate={props.isFocusedTemplate}
                        focusedBasic={focusedBasic}
                        onNextBasic={setNextBasicFocused}
                        setBasicFocused={(basicId: number) => setFocusedBasic(basicId)}
                    />
                );
        }
    };

    return (
        <div className="template" onClick={onTemplateClick}>
            {getOperationTemplate()}
        </div>
    );
};

export default Template;
