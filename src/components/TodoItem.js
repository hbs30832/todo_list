import React from "react";
import styled, { css } from "styled-components";
import { MdDelete, MdCheck } from "react-icons/md";

const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
`;

const Text = styled.p`
  flex: 1;
  font-size: 21px;
  color: #495057;
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

function TodoItem() {
  const done = true;
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdCheck />}</CheckCircle>
      <Text done={done}>투두 리스트 만들기</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
