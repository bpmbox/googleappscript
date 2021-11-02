import React, { Component } from "react";
import styled, { css } from "styled-components";

function LogoHeader(props) {
  return (
    <Root {...props}>
      <Text5Stack>
        <Center horizontal>
          <Text5>bx</Text5>
        </Center>
        <Rect8></Rect8>
      </Text5Stack>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: none;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const Text5 = styled.span`
  font-family: Arial;
  top: 0px;
  color: rgba(255,255,255,1);
  position: absolute;
  font-size: 36px;
`;

const Rect8 = styled.div`
  top: 38px;
  left: 0px;
  background-color: rgba(5,5,5,1);
  position: absolute;
  right: 0px;
  bottom: 6px;
`;

const Text5Stack = styled.div`
  flex: 1 1 0%;
  margin-bottom: -5px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default LogoHeader;
