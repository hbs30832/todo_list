import React from "react";
import styled, { css } from "styled-components";

function Button({ text, size, color, onClick }) {
  return (
    <ButtonBlock size={size} color={color} onClick={onClick}>
      {text}
    </ButtonBlock>
  );
}

const sizes = {
  big: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.5rem",
    fontSize: "1rem",
  },
  small: {
    height: "2rem",
    fontSize: "0.75rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const ButtonBlock = styled.button`
  padding: 10px 20px;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: pink;
  cursor: pointer;
  ${({ color }) => css`
    background-color: ${color};
  `}

  ${sizeStyles}

  &:active {
    opacity: 0.8;
  }
`;

ButtonBlock.defaultProps = {
  color: "pink",
  size: "medium",
};

export default Button;
