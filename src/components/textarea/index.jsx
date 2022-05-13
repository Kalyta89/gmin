import React from "react";

const Textarea = ({ className, textareaClassName, isError, label, name, id, onChange, value, onBlur }) => {
  const inputError = isError ? "border border-error" : `border border-input`;

  return (
    <div className={className}>
      <div className={`mb-1 pl-2 font-xs ${isError ? "text-error" : "text-text"}`}>{label}</div>
      <textarea
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        rows={10}
        onBlur={onBlur}
        className={`w-full focus:outline-none resize-none py-1 px-2 bg-transparent font-xs ${inputError} ${textareaClassName}`}
      />
    </div>
  );
};

export default Textarea;
