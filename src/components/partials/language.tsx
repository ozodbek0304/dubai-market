import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

function LanguageComponents({theme}:{theme:boolean}) {
  return (
    <Select defaultValue="uz">
      <SelectTrigger className={`shadow-none border-none font-medium cursor-pointer ${theme ? "text-slate-800" : "text-white"}`}>
        <SelectValue placeholder="Tilni tanlang" />
        <ChevronDown className={`w-5 h-5 ${theme ? "text-slate-800" : "text-white"}`} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="uz">O'zbek</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ru">Русский</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageComponents;
