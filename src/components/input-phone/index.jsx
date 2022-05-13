import React from "react";
import PhoneInput from "react-phone-input-2";

import "./index.scss";

const InputPhone = ({ id, name, title, placeholder, value, onBlur, onChange, isError, className }) => {
  const inputBorderColors = {
    text: isError ? "#ed7c7d" : "#606060",
    border: isError ? "#ed7c7d" : "#707070",
  };
  return (
    <div className={`${className} phone-input`}>
      <PhoneInput
        inputProps={{
          id: id,
          name: name,
          title: title,
          onBlur: onBlur,
        }}
        country={"us"}
        onlyCountries={["us"]}
        onChange={onChange}
        value={value}
        disableCountryCode={true}
        disableDropdown={true}
        masks={{ us: "...-...-...." }}
        style={{
          "--border-color": inputBorderColors.border,
          "--text": inputBorderColors.text,
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputPhone;
