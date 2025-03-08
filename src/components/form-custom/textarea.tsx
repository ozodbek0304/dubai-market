import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import { Label } from "../ui/label"
import ErrorMessage from "../ui/error-message"
import { Textarea } from "../ui/textarea"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    wrapperClassName?: ClassNameValue
    hideError?: boolean
    required?: boolean
    message?:string
}

export default function FormTextarea<IForm extends FieldValues>({
    methods,
    name,
    label,
    wrapperClassName,
    hideError = false,
    required = false,
    message="",
    ...props
}: IProps<IForm> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const {
        register,
        formState: { errors },
    } = methods


    const reg = register(name, {
        required: {
            value: required,
            message: message,
        },
    })

    useEffect(() => {
        register(name)
    }, [name, register]);

  
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
            <Textarea
                placeholder={label}
                id={name}
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
