import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background-color: #38d9a9;
  &:hover {
    background-color: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  border: none;
  outline: none;
  font-size: 60px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: 0.125s all ease-in;

  ${({ open }) =>
    open &&
    css`
      background-color: #ff6b6b;
      &:hover {
        background-color: #ff8787;
      }
      &:active {
        background-color: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InserForm = styled.form`
  background-color: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font-size: 18px;
`;

function TodoCreate({ onChange, onCreate, input }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InserForm>
            <Input
              placeholder="할 일을 입력 후, Enter를 누르세요"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onCreate(e);
                  setOpen(false);
                }
              }}
              onChange={onChange}
              value={input}
            />
          </InserForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={() => setOpen(!open)}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
