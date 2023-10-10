import React, { useState } from "react";
import AdditionTemplate from "../AdditionTemplate";
import SubtractionTemplate from "../SubtractionTemplate";
import MultiplicationTemplate from "../MultiplicationTemplate";
import DivisionTemplate from "../DivisionTemplate";
import { useActions } from "../../hooks/useActions";
import { ITemplate } from "../../types/templatesTypes";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export type TemplateProps = {
    template: ITemplate;
    isFocusedTemplate: boolean;
};

export type TemplateType = {
    focusedBasic: number;
    setBasicFocused: (basicId: number) => void;
    isFocusedTemplate?: boolean;
};

const Template = (props: TemplateProps) => {
    const { operation, id } = props.template;
    const [focusedBasic, setFocusedBasic] = useState(0);
    const {activeTemplate} = useTypedSelector((state)=>state.controll)
    const { setActiveTemplate } = useActions();

    const onTemplateClick = () => {
        if (activeTemplate.id!==id) {
            setActiveTemplate(props.template);
        }
    };

    const getOperationTemplate = (): React.JSX.Element => {
        switch (operation) {
            case "addition":
                return (
                    <AdditionTemplate
                        template={props.template}
                        isFocusedTemplate={activeTemplate.id===id}
                        focusedBasic={focusedBasic}
                        setBasicFocused={(basicId: number) => setFocusedBasic(basicId)}
                    />
                );
            case "subtraction":
                return (
                    <SubtractionTemplate
                        template={props.template}
                        isFocusedTemplate={activeTemplate.id===id}
                        focusedBasic={focusedBasic}
                        setBasicFocused={(basicId: number) => setFocusedBasic(basicId)}
                    />
                );
            case "multiplication":
                return (
                    <MultiplicationTemplate
                        template={props.template}
                        isFocusedTemplate={activeTemplate.id===id}
                        focusedBasic={focusedBasic}
                        setBasicFocused={(basicId: number) => setFocusedBasic(basicId)}
                    />
                );
            case "division":
                return (
                    <DivisionTemplate
                        template={props.template}
                        isFocusedTemplate={activeTemplate.id===id}
                        focusedBasic={focusedBasic}
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
