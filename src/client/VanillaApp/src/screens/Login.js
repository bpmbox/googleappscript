import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <Root>
      <Background>
        <Rect>
          <LogoColumn>
            <Logo>
              <EndWrapperFiller></EndWrapperFiller>
              <Text3Column>
                <Text3>bx</Text3>
                <Rect7></Rect7>
              </Text3Column>
            </Logo>
            <Form>
              <Username>
                <EvilIconsIcon
                  name="user"
                  style={{
                    color: "rgba(255,255,255,1)",
                    fontSize: 30,
                    marginLeft: 20,
                    alignSelf: "center"
                  }}
                ></EvilIconsIcon>
                <UsernameInput
                  placeholder="Username"
                  secureTextEntry={false}
                ></UsernameInput>
              </Username>
              <UsernameFiller>
                <Password>
                  <Rect8></Rect8>
                  <Center vertical>
                    <EvilIconsIcon
                      name="lock"
                      style={{
                        left: 20,
                        position: "absolute",
                        color: "rgba(255,255,255,1)",
                        fontSize: 33
                      }}
                    ></EvilIconsIcon>
                  </Center>
                  <PasswordInput
                    placeholder="Password"
                    secureTextEntry={false}
                  ></PasswordInput>
                  <Rect9></Rect9>
                </Password>
              </UsernameFiller>
              <Link to="/Channels">
                <Button>
                  <ButtonOverlay>
                    <Text2>Get Started</Text2>
                  </ButtonOverlay>
                </Button>
              </Link>
            </Form>
          </LogoColumn>
          <LogoColumnFiller></LogoColumnFiller>
          <FooterTexts>
            <Link to="/SignUp">
              <Button2>
                <ButtonOverlay>
                  <CreateAccountFiller></CreateAccountFiller>
                  <CreateAccount>Create Account</CreateAccount>
                </ButtonOverlay>
              </Button2>
            </Link>
            <Button2Filler></Button2Filler>
            <NeedHelp>Need Help?</NeedHelp>
          </FooterTexts>
        </Rect>
      </Background>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: rgb(255,255,255);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Background = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Rect = styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(31,178,204,1) 100%);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Logo = styled.div`
  width: 102px;
  height: 111px;
  flex-direction: column;
  display: flex;
  align-self: center;
`;

const EndWrapperFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Text3 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 96px;
  margin-bottom: 4px;
`;

const Rect7 = styled.div`
  height: 8px;
  background-color: #25cdec;
  margin-right: 4px;
`;

const Text3Column = styled.div`
  flex-direction: column;
  margin-bottom: 6px;
  margin-left: 2px;
  margin-right: -1px;
  display: flex;
`;

const Form = styled.div`
  height: 230px;
  flex-direction: column;
  display: flex;
  margin-top: 59px;
`;

const Username = styled.div`
  height: 59px;
  background-color: rgba(251,247,247,0.25);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const UsernameInput = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  flex: 1 1 0%;
  margin-right: 11px;
  margin-left: 11px;
  margin-top: 14px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Password = styled.div`
  height: 59px;
  background-color: rgba(253,251,251,0.67);
  border-radius: 50px;
  flex-direction: row;
  position: relative;
  display: flex;
`;

const Rect8 = styled.div`
  flex: 0.5 1 0%;
  background-color: rgba(252, 252, 252,1);
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

const PasswordInput = styled.input`
  font-family: Arial;
  top: 14px;
  left: 61px;
  height: 30px;
  color: rgba(255,255,255,1);
  position: absolute;
  right: 17px;
  border: none;
  background: transparent;
`;

const Rect9 = styled.div`
  flex: 0.5 1 0%;
  background-color: rgba(209, 209, 209,1);
  display: flex;
  flex-direction: column;
`;

const UsernameFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

const Button = styled.div`
  height: 59px;
  background-color: rgba(31,178,204,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const Text2 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-weight: 600;
  align-self: center;
`;

const LogoColumn = styled.div`
  flex-direction: column;
  margin-top: 130px;
  margin-left: 41px;
  margin-right: 41px;
  display: flex;
`;

const LogoColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const FooterTexts = styled.div`
  height: 14px;
  flex-direction: row;
  display: flex;
  margin-bottom: 36px;
  margin-left: 37px;
  margin-right: 36px;
`;

const Button2 = styled.div`
  width: 104px;
  height: 14px;
  flex-direction: column;
  display: flex;
  align-self: flex-end;
  border: none;
`;

const CreateAccountFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const CreateAccount = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,0.5);
`;

const Button2Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const NeedHelp = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,0.5);
  align-self: flex-end;
  margin-right: -1px;
`;

export default Login;
