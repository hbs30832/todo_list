import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";

import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { useReducer, useRef } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;

const initialState = {
  input: "",
  todos: [
    { id: 1, text: "배열 출력하기", done: true },
    { id: 2, text: "배열 추가하기", done: true },
    { id: 3, text: "배열 제거하기", done: true },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT": {
      return { ...state, input: action.input };
    }
    case "CREATE_TODO":
      return { ...state, todos: state.todos.concat(action.todo), input: "" };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };

    default:
      return state;
  }
}

function App() {
  // 1. 배열로 TodoItem 출력.
  // 2. useReducer로 초기값 설정 => 1번 지장 x;
  // 3. swtich문에 하나씩 로직 추가.
  // 4. 각 case별 action dispatch하는 함수 작성.
  // 5. 해당 컴포넌트에 함수 전달

  const [state, dispatch] = useReducer(reducer, initialState);

  const { input, todos } = state;

  const nextId = useRef(4);

  const onChange = (e) => {
    dispatch({ type: "CHANGE_INPUT", input: e.target.value });
  };

  const onCreate = (e) => {
    dispatch({
      type: "CREATE_TODO",
      todo: { id: nextId.current, text: e.target.value, done: false },
    });
    nextId.current++;
  };

  const onToggle = (id) => dispatch({ type: "TOGGLE_TODO", id });

  const onRemove = (id) => dispatch({ type: "REMOVE_TODO", id });

  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <TodoCreate input={input} onChange={onChange} onCreate={onCreate} />
      </TodoTemplate>
    </>
  );
}

export default App;
