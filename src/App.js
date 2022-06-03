import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";

import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
