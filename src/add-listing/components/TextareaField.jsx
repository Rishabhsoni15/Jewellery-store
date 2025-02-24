import React from "react";
import { Textarea } from "@/components/ui/textarea";

function TextareaField({ item, handleInputChange }) {
  return (
    <div>
      <Textarea
        onchange={(e) => handleInputChange(item.name, e.target.value)}
        required={item.required}
      />
    </div>
  );
}

export default TextareaField;
