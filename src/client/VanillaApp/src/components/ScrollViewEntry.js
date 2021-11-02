import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function ScrollViewEntry(props) {
  return (
    <Container {...props}>
      <Text2Stack>
        <Text2>SpaceX goes to Mars: To setup establishment by 2040</Text2>
        <Rect2>
          <IconRow>
            <IoniconsIcon
              name="ios-globe"
              style={{
                color: "grey",
                fontSize: 18
              }}
            ></IoniconsIcon>
            <Text3>SPACE.com</Text3>
            <EvilIconsIcon
              name="clock"
              style={{
                color: "grey",
                fontSize: 18,
                marginLeft: 41
              }}
            ></EvilIconsIcon>
            <Text4>Oct 5, 2019</Text4>
          </IconRow>
        </Rect2>
      </Text2Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text2 = styled.span`
  font-family: Arial;
  top: 0px;
  left: 0px;
  width: 320px;
  height: 56px;
  color: #121212;
  position: absolute;
  font-size: 16px;
  line-height: 20px;
`;

const Rect2 = styled.div`
  left: 0px;
  width: 274px;
  position: absolute;
  bottom: 0px;
  height: 20px;
  flex-direction: row;
  display: flex;
`;

const Text3 = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 14px;
  margin-left: 16px;
`;

const Text4 = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 14px;
  margin-left: 17px;
  margin-top: 3px;
`;

const IconRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 21px;
`;

const Text2Stack = styled.div`
  width: 320px;
  height: 72px;
  margin-top: 9px;
  margin-left: 22px;
  position: relative;
`;

export default ScrollViewEntry;
