import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks {
    color: #20c997;
    font-size-adjust: 18px;
    margin-top: 40px;
    font-weight: 700;
  }
`;

function TodoHead({ todos }) {
  const count = todos.filter((todo) => !todo.done).length;

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const day = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <p className="day">{day}</p>
      <p className="tasks">할 일 {count}개 남음</p>
    </TodoHeadBlock>
  );
}

export default TodoHead;
