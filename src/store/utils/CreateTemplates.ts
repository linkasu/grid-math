import { IBasic, ITemplate } from "../../types/templatesTypes";

export const ADDITION_FIRST_TEMPLATE_ID = "addition-0";
export const SUBTRACTION_FIRST_TEMPLATE_ID = "subtraction-0";
export const MULTIPLICATION_FIRST_TEMPLATE_ID = "multiplication-0";
export const DIVISION_FIRST_TEMPLATE_ID = "division-0";


export const MAX_DIGIT_NUMBER = 5;
export const MAX_DIGIT_NUMBER_MULTIPLICATION = 3;
export const CALCULATED_NUMBERS_COUNT = 2;

export const ADDITION_FIRST_TEMPLATE: ITemplate = {
    operation: "addition",
    id: ADDITION_FIRST_TEMPLATE_ID,
    basics: createAdditionBasics(ADDITION_FIRST_TEMPLATE_ID),
};

export const SUBTRACTION_FIRST_TEMPLATE: ITemplate = {
    operation: "subtraction",
    id: SUBTRACTION_FIRST_TEMPLATE_ID,
    basics: createSubtractionBasics(SUBTRACTION_FIRST_TEMPLATE_ID),
};

export const MULTIPLICATION_FIRST_TEMPLATE: ITemplate = {
    operation: "multiplication",
    id: MULTIPLICATION_FIRST_TEMPLATE_ID,
    basics: createMultiplicationBasics(MULTIPLICATION_FIRST_TEMPLATE_ID),
};

export const DIVISION_FIRST_TEMPLATE: ITemplate = {
    operation: "division",
    id: DIVISION_FIRST_TEMPLATE_ID,
    basics: createDivisionBasics(DIVISION_FIRST_TEMPLATE_ID),
};

export function createAdditionBasics(templateId: string): IBasic[] {
    return [
        {
            id: `${templateId}-0`,
            operation: "addition",
            digitsInRow: MAX_DIGIT_NUMBER,
            calculatedNumbersCount: CALCULATED_NUMBERS_COUNT,
            isHelperCalculation: false,
            digitsInResult: MAX_DIGIT_NUMBER + 1,
        },
    ];
}

export function createSubtractionBasics(templateId: string): IBasic[] {
    return [
        {
            id: `${templateId}-0`,
            operation: "subtraction",
            digitsInRow: MAX_DIGIT_NUMBER,
            calculatedNumbersCount: CALCULATED_NUMBERS_COUNT,
            isHelperCalculation: false,
            digitsInResult: MAX_DIGIT_NUMBER,
        },
    ];
}

export function createMultiplicationBasics(templateId: string): IBasic[] {
    return [
        {
            id: `${templateId}-0`,
            operation: "multiplication",
            digitsInRow: MAX_DIGIT_NUMBER_MULTIPLICATION,
            calculatedNumbersCount: CALCULATED_NUMBERS_COUNT,
            isHelperCalculation: false,
            digitsInResult: 0,
        },
        {
            id: `${templateId}-1`,
            operation: "addition",
            digitsInRow: MAX_DIGIT_NUMBER_MULTIPLICATION + 1,
            calculatedNumbersCount: MAX_DIGIT_NUMBER_MULTIPLICATION,
            isHelperCalculation: true,
            digitsInResult: MAX_DIGIT_NUMBER_MULTIPLICATION * 2 + 1,
        },
    ];
}

export function createDivisionBasics(templateId: string): IBasic[] {
    const basicsArray: IBasic[] = [];
    [...Array(5)].map((e, i) => {
        basicsArray.push({
            id: `${templateId}-${i}`,
            calculatedNumbersCount: CALCULATED_NUMBERS_COUNT,
            operation: "subtraction",
            digitsInRow: 5,
            isHelperCalculation: true,
            digitsInResult: i + 1 === 5 ? 5 : 0,
        });
        if (i + 1 === 5) {
            basicsArray.push({
                id: `${templateId}-${i + 1}`,
                calculatedNumbersCount: CALCULATED_NUMBERS_COUNT,
                operation: "division",
                digitsInRow: 5,
                isHelperCalculation: false,
            });
        }
    });
    return basicsArray;
}
