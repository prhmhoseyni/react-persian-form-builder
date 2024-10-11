import { type InputHTMLAttributes } from "react";

export interface FormFieldProps<T> extends InputHTMLAttributes<T> {
    name: string;
    label: string;
    required?: boolean;
    unit?: string;
    helperText?: string;
}

export enum FormField {
    TEXT = "TEXT",
    SHEBA = "SHEBA",
    PHONE = "PHONE",
    NUMBER = "NUMBER",
    CELLPHONE = "CELLPHONE",
    BANK_CARD = "BANK_CARD",
    AMOUNT = "AMOUNT",
}