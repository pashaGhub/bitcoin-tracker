import React from "react";

interface ICustomInput {
  title: string;
  value: string;
  setValue(value: string): void;
}

const CustomInput: React.FC<ICustomInput> = ({ title, value, setValue }) => {
  return (
    <div data-testid="custom-input" className="custom-input">
      <input
        name={title}
        placeholder="   "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label data-testid="input-label" className="custom-input__label">
        {title}
      </label>
    </div>
  );
};

export default CustomInput;
