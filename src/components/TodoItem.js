import React from "react";
import styled, { css } from "styled-components";
import { MdDelete, MdCheck } from "react-icons/md";

const Remove = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Text = styled.p`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${({ done }) =>
    done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Remove} {
      display: flex;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  margin-right: 20px;
  cursor: pointer;

  ${({ done }) =>
    done &&
    css`
      color: #38d9a9;
      border-color: #38d9a9;
    `}
`;

function TodoItem({ todo, onRemove, onToggle }) {
  const { text, done, id } = todo;
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => onToggle(id)}>
        {done && <MdCheck />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={() => onRemove(id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
