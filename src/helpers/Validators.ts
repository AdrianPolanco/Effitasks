import { Form } from "react-router-dom";
import { FormInputFields } from "../types/FormInputFields";

export const validateName = (name: string) => {
    const nameRegExp: RegExp =
        /^(?=.{1,110}$)[a-zA-Z]{2,}(?:\s[a-zA-Z]{3,}){0,}$/;
    return nameRegExp.test(name);
};
export const validateUsername = (username: string) => {
    const usernameRegExp: RegExp = /^.{6,}$/;
    return usernameRegExp.test(username);
};

export const validateEmail = (email: string) => {
    const emailRegExp: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegExp.test(email);
};
