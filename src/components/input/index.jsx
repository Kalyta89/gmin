import React from "react";

import "./index.scss";

const Input = ({
  className,
  placeholder,
  isError,
  type,
  title,
  name,
  id,
  onChange,
  value,
  onBlur,
  label,
  isRoundedInput,
  classNameMain,
}) => {
  const inputError = isError
    ? "border-b border-error input-error-color"
    : `border-b border-input input-color`;

  return (
    <div
      className={`input-wrapper justify-between items-center ${classNameMain}`}
    >
      {label ? (
        <label htmlFor={name} className={"input-label lg:mb-0"}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={`${
          isRoundedInput
            ? "rounded-input w-full pl-8 text-black"
            : "bg-transparent input-classes pb-1 pl-2 outline-none w-full font-xs"
        } ${inputError} ${className}`}
      />
    </div>
  );
};

export default Input;
