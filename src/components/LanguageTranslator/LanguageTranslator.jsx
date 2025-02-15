import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/components/select";
import React from "react";

const LanguageTranslator = () => {
  return (
    <Select>
      <SelectTrigger className=" h-auto p-1 px-1.5 w-[150px] text-sm">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="English" className="py-1 text-xs">English</SelectItem>
        <SelectItem value="Chinese" className="py-1 text-xs">Chinese</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageTranslator;
