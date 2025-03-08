import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import { Input, InputProps } from "../ui/input"
import { Label } from "../ui/label"
import ErrorMessage from "../ui/error-message"
import { useTranslation } from "react-i18next"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    wrapperClassName?: ClassNameValue
    hideError?: boolean
    required?: boolean
    message?: string
}

export default function FormInput<IForm extends FieldValues>({
    methods,
    name,
    label,
    type = "text",
    wrapperClassName,
    hideError = false,
    required = false,
    message = "",
    ...props
}: IProps<IForm> & InputProps) {
    const {
        register,
        formState: { errors },
    } = methods
    const { t, i18n } = useTranslation();

    const reg = register(name, {
        required: {
            value: required,
            message: message,
        },
    })

    useEffect(() => {
        register(name)
    }, [name, register])

    return (
        <fieldset
            className={cn("flex flex-col gap-1 w-full", wrapperClassName)}
        >
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(!!errors?.[name] && "text-destructive")}
                    required={required}
                >
                    {label}
                </Label>
            )}
            <Input
                type={type}
                placeholder={label}
                id={name}
                fullWidth
                autoComplete="off"
                {...reg}
                {...props}
            />
            {!hideError && errors[name] && (
                <ErrorMessage>
                    {(errors[name]?.message as string) ||
                        errors.root?.[name]?.message}
                </ErrorMessage>
            )}
        </fieldset>
    )
}
