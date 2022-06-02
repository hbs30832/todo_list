import styled from "styled-components";
import Button from "./components/Button";

const main_color = "#228be6";
function App() {
  return (
    <Block>
      <Button text="버튼" size="big" color="red" />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${main_color};
  width: 500px;
  height: 500px;
  margin: 50px auto 0;
`;

export default App;
