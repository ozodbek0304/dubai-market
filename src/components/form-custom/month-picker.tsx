import { cn } from "@/lib/utils"
import {
    Controller,
    FieldValues,
    Path,
    useController,
    UseFormReturn,
} from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import { Label } from "../ui/label"
import ErrorMessage from "../ui/error-message"
import { MonthPicker } from "../ui/month-picker"
import { useTranslation } from "react-i18next"

export default function FormMonthPicker<IForm extends FieldValues>({
    name,
    label,
    disabled,
    placeholder,
    methods,
    hideError = false,
    required = false,
    wrapperClassName,
}: IProps<IForm>) {

    const { t, i18n } = useTranslation();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control: methods.control,
        rules: {
            required: {
                value: required,
                message: `${label}${i18n.language === "uz" ? "" : " "}${t("ni tanlang")}`,
            },
        },
    })
    return (
        <fieldset
            className={cn("flex flex-col gap-1 w-full", wrapperClassName)}
        >
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(!!error && "text-destructive")}
                    required={required}
                >
                    {label}
                </Label>
            )}
            <Controller
                name={name}
                control={methods.control}
                render={() => (
                    <MonthPicker
                        value={field.value}
                        setValue={field.onChange}
                        disabled={field.disabled || disabled}
                        placeholder={placeholder}
                        className="w-full"
                    />
                )}
            />
            {!!error && !hideError && (
                <ErrorMessage>
                    {error.message || error.root?.message}
                </ErrorMessage>
            )}
        </fieldset>
    )
}

interface IProps<IForm extends FieldValues> {
    label?: string
    placeholder?: string
    disabled?: boolean
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    hideError?: boolean
    wrapperClassName?: ClassNameValue
    required?: boolean
}
