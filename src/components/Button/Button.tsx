import React from "react";

export interface IButton {
  text: string;
  eventHandler: Function;
}

const Button: React.FC<IButton> = ({ text, eventHandler }) => {
  return (
    <button
      data-testid="custom-button"
      className="custom-button"
      onClick={() => eventHandler()}
    >
      {text}
    </button>
  );
};

export default Button;
