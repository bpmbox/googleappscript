import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialIconsIcon from "react-native-vector-icons/dist/MaterialIcons";
import LogoHeader from "./LogoHeader";
import { Link } from "react-router-dom";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function HeaderX(props) {
  return (
    <Container {...props}>
      <Group>
        <IconRow>
          <MaterialIconsIcon
            name="dehaze"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 25,
              width: 18,
              height: 25,
              marginTop: 9
            }}
          ></MaterialIconsIcon>
          <LogoHeader
            style={{
              width: 41,
              height: 44,
              marginLeft: 131
            }}
          ></LogoHeader>
        </IconRow>
        <IconRowFiller></IconRowFiller>
        <Link to="/Settings">
          <Button>
            <ButtonOverlay /* Conditional navigation not supported at the moment */
            >
              <FeatherIcon
                name={props.icon2Name || "settings"}
                style={{
                  color: "rgba(250,250,250,1)",
                  fontSize: 25
                }}
              ></FeatherIcon>
            </ButtonOverlay>
          </Button>
        </Link>
      </Group>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(31,178,204,1);
  flex-direction: column;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Group = styled.div`
  height: 55px;
  background-color: rgba(31,178,204,1);
  flex-direction: row;
  display: flex;
  margin-top: 25px;
`;

const IconRow = styled.div`
  height: 44px;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 6px;
  display: flex;
`;

const IconRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Button = styled.div`
  width: 25px;
  height: 25px;
  flex-direction: column;
  display: flex;
  margin-right: 10px;
  margin-top: 15px;
  border: none;
`;

export default HeaderX;
