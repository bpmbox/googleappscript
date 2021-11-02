import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "../components/HeaderX";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import MaterialUISwitch from "@material-ui/core/Switch";

function Settings(props) {
  return (
    <Root>
      <HeaderX
        style={{
          height: 80,
          boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
        }}
        icon2Name="power"
      ></HeaderX>
      <Body>
        <EllipseStack>
          <svg
            viewBox="0 0 859.43 890.3"
            style={{
              top: 9,
              left: 0,
              width: 859,
              height: 890,
              position: "absolute"
            }}
          >
            <ellipse
              strokeWidth={1}
              fill="rgba(255,255,255,1)"
              cx={430}
              cy={445}
              rx={429}
              ry={445}
            ></ellipse>
          </svg>
          <SettingsList>
            <AccountSettings>
              <Expanded>Account Settings</Expanded>
              <SubSettings>
                <EditProfileColumn>
                  <EditProfile>
                    <Text10>Edit Profile</Text10>
                    <Text10Filler></Text10Filler>
                    <IoniconsIcon
                      name="ios-arrow-forward"
                      style={{
                        color: "rgba(31,178,204,1)",
                        fontSize: 30
                      }}
                    ></IoniconsIcon>
                  </EditProfile>
                  <ChangeConnections>
                    <Text11>Change connections</Text11>
                    <Text11Filler></Text11Filler>
                    <IoniconsIcon
                      name="ios-arrow-forward"
                      style={{
                        color: "rgba(31,178,204,1)",
                        fontSize: 30
                      }}
                    ></IoniconsIcon>
                  </ChangeConnections>
                </EditProfileColumn>
                <EditProfileColumnFiller></EditProfileColumnFiller>
                <ProviderSettings>
                  <Text12>Edit provider settings</Text12>
                  <Text12Filler></Text12Filler>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={{
                      color: "#1fb2cc",
                      fontSize: 30
                    }}
                  ></IoniconsIcon>
                </ProviderSettings>
              </SubSettings>
            </AccountSettings>
            <Sub2>
              <NotificationsColumn>
                <Notifications>
                  <Text7>Notifications</Text7>
                  <Text7Filler></Text7Filler>
                  <Switch3>
                    <MaterialUISwitch
                      color="primary"
                      checked={true}
                      style={{ color: "rgba(31,178,204,1)" }}
                    ></MaterialUISwitch>
                  </Switch3>
                </Notifications>
                <Backup>
                  <Text72>Backup</Text72>
                  <Text72Filler></Text72Filler>
                  <Switch2>
                    <MaterialUISwitch
                      color="primary"
                      checked={false}
                    ></MaterialUISwitch>
                  </Switch2>
                </Backup>
              </NotificationsColumn>
              <NotificationsColumnFiller></NotificationsColumnFiller>
              <Sponsored>
                <Text73>Sponsored Messages</Text73>
                <Text73Filler></Text73Filler>
                <Switch4>
                  <MaterialUISwitch
                    color="primary"
                    checked={false}
                  ></MaterialUISwitch>
                </Switch4>
              </Sponsored>
            </Sub2>
          </SettingsList>
          <PageName>SETTINGS</PageName>
          <UserInfo>
            <AvatarRow>
              <Avatar
                src={require("../assets/images/actor-adult-black-and-white-1040880.jpg")}
              ></Avatar>
              <UserEmailStack>
                <UserEmail>stan@stansmith.com</UserEmail>
                <UserName>Stan {"\n"}Smith</UserName>
              </UserEmailStack>
            </AvatarRow>
          </UserInfo>
        </EllipseStack>
      </Body>
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

const Body = styled.div`
  background-color: #1fb2cc;
  width: 360px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const SettingsList = styled.div`
  left: 51px;
  height: 409px;
  position: absolute;
  right: 450px;
  bottom: 272px;
  flex-direction: column;
  display: flex;
`;

const AccountSettings = styled.div`
  height: 165px;
  flex-direction: column;
  display: flex;
  margin-top: 15px;
  margin-left: 24px;
  margin-right: 24px;
`;

const Expanded = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 18px;
  font-weight: 700;
  margin-top: -3px;
`;

const SubSettings = styled.div`
  height: 118px;
  flex-direction: column;
  display: flex;
  margin-top: 8px;
`;

const EditProfile = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
`;

const Text10 = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,1);
  font-size: 16px;
  margin-top: 6px;
`;

const Text10Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const ChangeConnections = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
`;

const Text11 = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,1);
  font-size: 16px;
  margin-top: 6px;
`;

const Text11Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const EditProfileColumn = styled.div`
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
`;

const EditProfileColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const ProviderSettings = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

const Text12 = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,1);
  font-size: 16px;
  margin-top: 6px;
`;

const Text12Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Sub2 = styled.div`
  height: 186px;
  flex-direction: column;
  display: flex;
  margin-top: 18px;
  margin-left: 29px;
  margin-right: 29px;
`;

const Notifications = styled.div`
  height: 27px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

const Text7 = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 18px;
  font-weight: 700;
`;

const Text7Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Switch3 = styled.div`
 width: 40px;
`;

const Backup = styled.div`
  height: 27px;
  align-self: center;
  flex-direction: row;
  display: flex;
  margin-top: 53px;
`;

const Text72 = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 18px;
  font-weight: 700;
`;

const Text72Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Switch2 = styled.div`
  width: 40px;
  margin-right: -2px;
`;

const NotificationsColumn = styled.div`
  flex-direction: column;
  display: flex;
`;

const NotificationsColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Sponsored = styled.div`
  height: 27px;
  align-self: center;
  flex-direction: row;
  display: flex;
`;

const Text73 = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 18px;
  font-weight: 700;
`;

const Text73Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Switch4 = styled.div`
 width: 40px;
`;

const PageName = styled.span`
  font-family: Arial;
  top: 0px;
  left: 85px;
  color: rgba(255,255,255,1);
  position: absolute;
  font-size: 24px;
  font-weight: bold;
`;

const UserInfo = styled.div`
  top: 64px;
  left: 87px;
  height: 125px;
  position: absolute;
  right: 451px;
  flex-direction: row;
  display: flex;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 100px;
  object-fit: stretch;
`;

const UserEmail = styled.span`
  font-family: Arial;
  top: 75px;
  left: 0px;
  color: rgba(0,0,0,1);
  position: absolute;
  font-size: 16px;
`;

const UserName = styled.span`
  font-family: Arial;
  top: 0px;
  left: 0px;
  color: #1fb2cc;
  position: absolute;
  font-size: 30px;
`;

const UserEmailStack = styled.div`
  width: 145px;
  height: 97px;
  margin-left: 62px;
  margin-top: 13px;
  position: relative;
`;

const AvatarRow = styled.div`
  height: 110px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 14px;
`;

const EllipseStack = styled.div`
  height: 899px;
  margin-top: 34px;
  margin-left: -50px;
  margin-right: -449px;
  position: relative;
`;

export default Settings;
