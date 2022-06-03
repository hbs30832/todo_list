import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.ul`
  flex: 1;
  padding: 20px 32px 48px;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem />
    </TodoListBlock>
  );
}

export default TodoList;
