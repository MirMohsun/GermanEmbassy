import { useState, useEffect } from "react";

export type IUseTextInput = (
    label: string,
    initValue: string
) => {
    inputState: inputState,
    inputValue: string,
    label: string,
    setValue: (text: string)=> void
};

export interface IUseTextInputProps {
    label: string
}

export type inputState = "simple" | "correct" | "error";

export const useTextInput: IUseTextInput =(label, initValue) => {
    const [inputState, setInputState] = useState<inputState>("simple");
    const [value, setValue] = useState<string>(initValue ?? "");

    const onCheckPassword = (value: string): boolean => {
        const upper = /(?=.*[A-Z])[A-Z]/gm;
        const lower = /(?=.*[a-z])[a-z]/gm;
        const numOrSymbol = /(?=.*[0-9@#$%&!])[0-9@#$%&!]/gm;
        const cyrillic = /(?=.*[а-яА-ЯЁё])[а-яА-ЯЁё]/gm;
        const isCorrect = numOrSymbol.test(value) && upper.test(value) && lower.test(value) && !cyrillic.test(value) && value.length >= 8;
        return isCorrect;
    };

    const valueHandler = (value: string) => {
        if (label === "Password"){
            setValue(value);
            const result = onCheckPassword(value.trim());
            setInputState(!result ? "error" : "correct");
        }
        else {
            setValue(value);
        }
    };

    useEffect(() => {
        valueHandler(value);
    }, [value]);

    return {
        inputState,
        inputValue: value,
        label,
        setValue: setValue
    };
};