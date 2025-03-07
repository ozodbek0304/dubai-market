import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

function LanguageComponents({ theme }: { theme: boolean }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Select defaultValue={i18n.language} onValueChange={changeLanguage}>
      <SelectTrigger
        className={`shadow-none sm:border-none font-medium cursor-pointer ${theme ? "text-slate-800" : "text-white"}`}
        aria-label="Tilni tanlang"
      >
        <SelectValue>
          {i18n.language === "uz" ? "O'zbek" : i18n.language === "en" ? "English" : "Русский"}
        </SelectValue>
        <ChevronDown className={`w-5 h-5 ${theme ? "text-slate-800" : "text-white"}`} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="uz">{"O'zbek"}</SelectItem>
          <SelectItem value="en">{"English"}</SelectItem>
          <SelectItem value="ru">{"Русский"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageComponents;
