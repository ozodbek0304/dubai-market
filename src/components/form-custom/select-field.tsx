/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import {
    FieldValues,
    Path,
    useController,
    UseFormReturn,
} from "react-hook-form"
import Select, {
    ClassNamesConfig,
    components,
    MenuListProps,
    Props,
    ValueContainerProps,
} from "react-select"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { Separator } from "../ui/separator"
import ErrorMessage from "../ui/error-message"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    required?: boolean
    optionLabelKey?: string
    optionValueKey?: string
    wrapperClassName?: string
    onValueChange?: () => void
    hideError?: boolean
    showFormatKey?: string
}

export default function SelectField<IForm extends FieldValues>({
    name,
    methods,
    label,
    required = false,
    optionLabelKey = "name",
    optionValueKey = "id",
    classNames,
    components,
    wrapperClassName,
    options,
    onValueChange,
    hideError = false,
    showFormatKey,
    ...props
}: IProps<IForm> & Props) {
    const opts = options || []
    const { control } = methods
    const {
        field: { onChange, value, disabled, ...field },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: {
            validate: (val) => {
                if (!required) return true
                if (props.isMulti)
                    return val?.length > 0 || "Ushbu maydon majburiy"
                return (
                    (val !== undefined && val !== null) ||
                    "Ushbu maydon majburiy"
                )
            },
        },
    })

    // @ts-expect-error sdf
    const currentVal = opts.find((o) => o[optionValueKey] === value) || null
    const multiCurrentVal =
        props.isMulti ?
            // @ts-expect-error sdf
            opts.filter((o) => value?.includes(o[optionValueKey]))
        :   []

    const handleOnchange = (val: unknown) => {
        if (onValueChange) {
            onValueChange()
        }
        if (val) {
            if (props.isMulti) {
                // @ts-expect-error sdf
                onChange(val.map((o) => o[optionValueKey]))
            } else {
                // @ts-expect-error sdf
                onChange(val[optionValueKey])
            }
        } else {
            onChange(val)
        }
    }

    return (
        <fieldset
            className={cn(
                "flex flex-col gap-1 min-w-48 w-full",
                wrapperClassName,
            )}
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
            <Select
                // @ts-expect-error this is default getOptionLabel
                getOptionLabel={(opt) => opt[optionLabelKey]}
                // @ts-expect-error this is default getOptionValue
                getOptionValue={(opt) => opt[optionValueKey]}
                components={{
                    DropdownIndicator,
                    ValueContainer,
                    MenuList,
                    ...components,
                }}
                isClearable
                classNames={{ ...defaultSelectClassNames, ...classNames }}
                unstyled
                noOptionsMessage={() => (
                    <p className="text-sm py-1">Mavjud emas</p>
                )}
                hideSelectedOptions={false}
                closeMenuOnSelect={!props.isMulti}
                placeholder={
                    props.isMulti ?
                        "Bir yoki bir nechtasini tanlang"
                    :   "Tanlang"
                }
                value={props.isMulti ? multiCurrentVal : currentVal}
                onChange={handleOnchange}
                options={opts || []}
                isDisabled={disabled}
                menuPortalTarget={document.body}
                styles={{
                    menuPortal: (base) => ({
                        ...base,
                        zIndex: 9999,
                        pointerEvents: "all",
                    }),
                }}
                inputId={name}
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

const defaultSelectClassNames: ClassNamesConfig = {
    control: ({
        isFocused,
        isDisabled,
    }: {
        isFocused: boolean
        isDisabled: boolean
    }) =>
        cn(
            "h-9 !min-h-[unset] flex rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium",
            isFocused ? "outline-none ring-2 ring-ring" : "",
            isDisabled ? "opacity-50" : "",
        ),
    placeholder: () => cn("text-muted-foreground truncate"),
    clearIndicator: () => cn("text-primary"),
    menuList: () =>
        cn(
            "mt-2 p-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none",
        ),
    option: ({ isSelected }: { isSelected: boolean }) =>
        cn(
            "border-b last:border-none first:rounded-t-md last:rounded-b-md px-2 py-1.5 !text-sm outline-none hover:bg-secondary",
            isSelected ?
                "bg-primary/70 hover:bg-primary/70 text-background"
            :   "",
        ),
    multiValue: () =>
        cn("bg-secondary rounded-md px-[4px] py-[2px] gap-1 justify-between"),
    valueContainer: () => "gap-1",
}

const DropdownIndicator = () => (
    <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
)

const MenuList = (props: MenuListProps) => {
    const { children, getValue, options, setValue, isMulti } = props
    const val = getValue()
    return (
        <components.MenuList {...props}>
            {isMulti && (
                <>
                    <p className="flex items-center gap-2 p-2">
                        <Checkbox
                            onCheckedChange={(v) => {
                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                v ?
                                    setValue(options, "select-option")
                                :   setValue([], "deselect-option")
                            }}
                            checked={val.length === options.length}
                        />{" "}
                        Barchasini tanlash
                    </p>
                    <Separator />
                </>
            )}
            {children}
        </components.MenuList>
    )
}

const ValueContainer = ({
    children,
    ...props
}: ValueContainerProps<unknown>) => {
    // eslint-disable-next-line prefer-const
    let [values, input] = children as any

    // if (Array.isArray(values)) {
    //     console.log(values);

    //     values = values?.map((el) => el.key).join(", ")
    // }

    if (Array.isArray(values) && props.isMulti) {
        values = values?.map((el: any) => ({
            ...el,
            props: {
                ...el.props,
                children: el.props.data?.code ?? el.props.children,
            },
        }))
    }

    return (
        <components.ValueContainer {...props}>
            {values}
            {input}
        </components.ValueContainer>
    )
}
