import { FormField } from "~/config/types.ts";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: convert fa digits to en digits ::::
 */
export const toEnglishDigit = (str: string): string => {
    return str.toString().replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
};

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: format form values ::::
 */
export function formatValues(values: Record<string, unknown>) {
    const data: Record<string, unknown> = {}

    for (const [key, value] of Object.entries(values)) {
        const [fieldType, fieldName] = key.split("/")

        if (
            fieldType === FormField.CELLPHONE ||
            fieldType === FormField.PHONE ||
            fieldType === FormField.SHEBA ||
            fieldType === FormField.BANK_CARD
        ) {
            data[fieldName] = (value ?? "").toString().replace(/[^0-9]+/g, "")
        } else if (
            fieldType === FormField.NUMBER ||
            fieldType === FormField.AMOUNT
        ) {
            data[fieldName] = Number((value ?? "").toString().replace(/[^0-9.-]+/g, ""))
        } else {
            data[fieldName] = (value ?? "").toString().trim()
        }
    }

    return data;
}