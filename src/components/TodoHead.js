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

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2022월 6월 3일</h1>
      <p className="day">금요일</p>
      <p className="tasks">할 일 2개 남음</p>
    </TodoHeadBlock>
  );
}

export default TodoHead;
