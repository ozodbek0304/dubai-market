import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
    children: ReactNode;
    className?: string;
}

export default function ErrorMessage({ children, className }: IProps) {
    const { t } = useTranslation();

    return (
        <p className={cn("text-destructive text-xs font-medium", className)}>
            {typeof children === "string" ? t(children) : children}
        </p>
    );
}
