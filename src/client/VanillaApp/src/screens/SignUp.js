import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";
import { Link } from "react-router-dom";

function SignUp(props) {
  return (
    <Root>
      <Background>
        <Rect2>
          <ProgressBarColumn>
            <ProgressBar>
              <Icon2Row>
                <IoniconsIcon
                  name="md-checkmark-circle"
                  style={{
                    color: "rgba(30,174,199,1)",
                    fontSize: 40,
                    width: 33,
                    height: 40
                  }}
                ></IoniconsIcon>
                <Rect4></Rect4>
                <EntypoIcon
                  name="time-slot"
                  style={{
                    color: "#1fb2cc",
                    fontSize: 35,
                    width: 40,
                    height: 36,
                    marginLeft: 4,
                    marginTop: 4
                  }}
                ></EntypoIcon>
                <Rect5></Rect5>
              </Icon2Row>
              <Icon2RowFiller></Icon2RowFiller>
              <FontAwesomeIcon
                name="circle"
                style={{
                  color: "rgba(255,255,255,1)",
                  fontSize: 40,
                  width: 34,
                  height: 40,
                  opacity: 0.75
                }}
              ></FontAwesomeIcon>
            </ProgressBar>
            <Text3>CREATE ACCOUNT</Text3>
            <Form>
              <NameColumn>
                <Name>
                  <EvilIconsIcon
                    name="user"
                    style={{
                      color: "rgba(255,255,255,1)",
                      fontSize: 33,
                      width: 33,
                      height: 33,
                      marginLeft: 15,
                      alignSelf: "center"
                    }}
                  ></EvilIconsIcon>
                  <NameInput
                    placeholder="Name"
                    secureTextEntry={false}
                  ></NameInput>
                </Name>
                <Email>
                  <EvilIconsIcon
                    name="envelope"
                    style={{
                      color: "rgba(255,255,255,1)",
                      fontSize: 33,
                      marginLeft: 15,
                      alignSelf: "center"
                    }}
                  ></EvilIconsIcon>
                  <EmailInput
                    placeholder="Email"
                    secureTextEntry={false}
                  ></EmailInput>
                </Email>
              </NameColumn>
              <NameColumnFiller></NameColumnFiller>
              <Password>
                <EvilIconsIcon
                  name="lock"
                  style={{
                    color: "rgba(255,255,255,1)",
                    fontSize: 33,
                    marginLeft: 15,
                    marginTop: 13
                  }}
                ></EvilIconsIcon>
                <PasswordInput placeholder="Password"></PasswordInput>
              </Password>
            </Form>
          </ProgressBarColumn>
          <ProgressBarColumnFiller></ProgressBarColumnFiller>
          <ButtonColumn>
            <Link to="/Timeline">
              <Button>
                <ButtonOverlay>
                  <Text2>Continue</Text2>
                </ButtonOverlay>
              </Button>
            </Link>
            <Text4>Terms &amp; Conditions</Text4>
          </ButtonColumn>
        </Rect2>
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

const Rect2 = styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(31,178,204,1) 100%);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const ProgressBar = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-left: 28px;
  margin-right: 28px;
`;

const Rect4 = styled.div`
  width: 50px;
  height: 7px;
  background-color: rgba(31,178,204,1);
  border-radius: 40px;
  margin-left: 6px;
  margin-top: 16px;
`;

const Rect5 = styled.div`
  width: 50px;
  height: 7px;
  background-color: rgba(230, 230, 230,1);
  opacity: 0.75;
  border-radius: 40px;
  margin-top: 16px;
`;

const Icon2Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
`;

const Icon2RowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Text3 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 24px;
  font-weight: bold;
  margin-top: 67px;
  align-self: center;
`;

const Form = styled.div`
  height: 230px;
  flex-direction: column;
  display: flex;
  margin-top: 107px;
`;

const Name = styled.div`
  height: 59px;
  background-color: rgba(255,255,255,0.25);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const NameInput = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 17px;
  margin-left: 13px;
  margin-top: 14px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Email = styled.div`
  height: 59px;
  background-color: rgba(255,255,255,0.25);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
  margin-top: 27px;
`;

const EmailInput = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  flex: 1 1 0%;
  margin-right: 17px;
  margin-left: 13px;
  margin-top: 14px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const NameColumn = styled.div`
  flex-direction: column;
  display: flex;
`;

const NameColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Password = styled.div`
  height: 59px;
  background-color: rgba(255,255,255,0.25);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const PasswordInput = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  flex: 1 1 0%;
  margin-right: 17px;
  margin-left: 13px;
  margin-top: 14px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const ProgressBarColumn = styled.div`
  flex-direction: column;
  margin-top: 53px;
  margin-left: 41px;
  margin-right: 41px;
  display: flex;
`;

const ProgressBarColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Button = styled.div`
  height: 55px;
  background-color: rgba(247,247,247,0);
  border-radius: 5px;
  border-color: rgba(255,255,255,1);
  border-width: 1px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-bottom: 54px;
  border-style: solid;
`;

const Text2 = styled.span`
  font-family: Arial;
  width: 66px;
  color: rgba(255,255,255,1);
  align-self: center;
`;

const Text4 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,0.5);
  align-self: center;
`;

const ButtonColumn = styled.div`
  flex-direction: column;
  margin-bottom: 31px;
  margin-left: 41px;
  margin-right: 41px;
  display: flex;
`;

export default SignUp;
