import { useEffect, useState } from "react";
import { useController, useFormContext, useWatch } from "react-hook-form";
import FormFieldWrapper from "~/components/FormFieldWrapper/FormFieldWrapper.tsx";
import { type FormFieldProps } from "~/config/types.ts";
import { toEnglishDigit } from "~/helpers/helpers.ts";

export default function FormFieldAmount(props: FormFieldProps<HTMLInputElement>) {
    const {
        name,
        label,
        required,
        unit,
        helperText,
        ...restProps
    } = props

    const formMethods = useFormContext()
    const controller = useController({ name, control: formMethods.control })
    const watch = useWatch({ name, control: formMethods.control })

    const formatValue = (value: string) => {
        value = toEnglishDigit(value ?? "")
        const removeExtraCharacters = Number(value.replace(/[^0-9]+/g, ""));
        return removeExtraCharacters ? Intl.NumberFormat().format(removeExtraCharacters) : "";
    };

    const [value, setValue] = useState<string>(formatValue(restProps.defaultValue?.toString() ?? ""));

    useEffect(() => {
        setValue(formatValue(watch));
    }, [watch]);

    return (
        <FormFieldWrapper
            name={name}
            label={label}
            required={required}
            unit={unit}
            helperText={helperText}
            // errorMessage={controller.fieldState.error?.message}
        >
            <input
                type="text"
                id={name}
                name={name}
                dir="ltr"
                inputMode="numeric"
                className={["form-control", controller.fieldState.error ? "form-control--error" : ""].filter(Boolean).join(" ")}
                value={formatValue(value)}
                onChange={event => {
                    controller.field.onChange(event.target.value ? Number(formatValue(event.target.value ?? "").replace(/[^0-9]+/g, "")) : null)
                }}
                {...restProps}
            />
        </FormFieldWrapper>
    );
}