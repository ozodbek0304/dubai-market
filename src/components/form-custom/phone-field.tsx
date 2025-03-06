import { cn } from "@/lib/utils"
import { PhoneNumberUtil } from "google-libphonenumber"
import {
    FieldValues,
    Path,
    useController,
    UseFormReturn,
} from "react-hook-form"
import {
    PhoneInput,
    PhoneInputProps,
    PhoneInputRefType,
} from "react-international-phone"
import "react-international-phone/style.css"
import { Label } from "../ui/label"
import ErrorMessage from "../ui/error-message"
import { useTranslation } from "react-i18next"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    required?: boolean
    wrapperClassName?: string
    hideError?: boolean
}

const phoneUtil = PhoneNumberUtil.getInstance()

export default function PhoneField<IForm extends FieldValues>({
    methods,
    name,
    label = "Telefon raqam",
    required = false,
    wrapperClassName,
    className,
    inputClassName,
    countrySelectorStyleProps,
    hideError = false,
    ...props
}: IProps<IForm> & PhoneInputProps & React.RefAttributes<PhoneInputRefType>) {
    const { control } = methods
    const isPhoneValid = (phone: string) => {
        try {
            return phoneUtil.isValidNumber(
                phoneUtil.parseAndKeepRawInput(phone),
            )
        } catch {
            return false
        }
    }

    const { t } = useTranslation();

    const {
        field: { value, ...field },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: {
            validate: (val: string) => {
                const v =
                    val ?
                        val.startsWith("+") ?
                            val
                            : `+${val}`
                        : ""
                let err = ""
                let isValid = true
                if (required) {
                    isValid = isPhoneValid(v)
                    if (!isValid) {
                        err = t("To'g'ri va to'liq to'ldiring")
                    }
                }

                return isValid || err
            },
        },
        // @ts-expect-error sdf
        defaultValue: "",
    })

    const val =
        (value as string) ?
            value.startsWith("+") ?
                value
                : `+${value}`
            : ""

    return (
        <fieldset
            className={cn("flex flex-col itemst gap-1 w-full", wrapperClassName)}
        >
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(!!error && "text-destructive")}
                    required={required}
                >
                    {t(label)}
                </Label>
            )}
            <PhoneInput
                // hideDropdown
                // forceDialCode
                className={cn(
                    "w-full h-9 rounded-md has-[input:focus]:ring-2 has-[input:focus]:ring-ring has-[input:focus]:ring-offset-0 !outline-none",
                    className,
                )}
                inputClassName={cn(
                    "w-full !h-full !text-foreground !rounded-r-md !px-3 !bg-background !border-input !text-sm",
                    inputClassName,
                )}
                countrySelectorStyleProps={{
                    // className="hidden",
                    buttonClassName:
                        "!h-full !px-3 !rounded-l-md !bg-background !border-input",
                    ...countrySelectorStyleProps,
                }}
                value={val}
                defaultCountry="uz"
                placeholder={t(label)}
                {...field}
                {...props}
            />
            {!!error && !hideError && (
                <ErrorMessage>
                    {error.message || error.root?.message}
                </ErrorMessage>
            )}
        </fieldset>
    )
}
