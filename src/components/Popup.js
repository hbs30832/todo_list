import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

function Popup({ onClick }) {
  return (
    <>
      <PopupBg>
        <PopupBlock>
          <Button text="확인" onClick={onClick} />
        </PopupBlock>
      </PopupBg>
    </>
  );
}

const PopupBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PopupBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 500px;
  height: 300px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;

  animation-duration: 0.25s;
  animation-timing-function: ease-in;
  animation-name: ${fadeIn};
`;

export default Popup;
