import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.ul`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

function TodoList({ todos, onRemove, onToggle }) {
  // 1. 배열로 TodoItem 출력.
  // 2. useReducer로 초기값 설정 => 1번 지장 x;
  // 3. swtich문에 하나씩 로직 추가.
  // 4. 각 case별 action dispatch하는 함수 작성.
  // 5. 해당 컴포넌트에 함수 전달.
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
