import { type PropsWithChildren } from "react";
import { useController, useFormContext } from "react-hook-form";

interface Props {
    name: string;
    label: string;
    required?: boolean;
    unit?: string;
    helperText?: string;
}

export default function FormFieldWrapper(props: PropsWithChildren<Props>) {
    const formMethods = useFormContext()
    const controller = useController({ name: props.name, control: formMethods.control })

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={props.name} className="font-normal text-[0.8125rem] leading-[18px] text-[var(--RPFF-prose-primary)] px-2">
                {props.label}
                {props.required && <sup className="text-[var(--RPFF-error)]">*</sup>}
                {props.unit && <span className="font-normal text-[0.6875rem] leading-[19px]">&nbsp;({props.unit})</span>}
            </label>

            {props.children}

            <div className={["flex flex-col gap-1", props.helperText ? "min-h-9" : "min-h-5"].join(" ")}>
                {controller.fieldState.error && (
                    <div className="flex items-center gap-1 font-normal text-[0.75rem] leading-[16px] text-[var(--RPFF-error)]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 -960 920 920">
                            <path
                                d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                                className="fill-[var(--RPFF-error)]"
                            />
                        </svg>

                        {controller.fieldState.error.message}
                    </div>
                )}

                {props.helperText && (
                    <div className="font-normal text-[0.75rem] leading-[16px] text-[var(--RPFF-prose-hint)]">
                        {props.helperText}
                    </div>
                )}
            </div>
        </div>
    );
}