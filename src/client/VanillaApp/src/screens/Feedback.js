import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "../components/HeaderX";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import GoogleMapReact from "google-map-react";

function Feedback(props) {
  return (
    <Root>
      <HeaderX
        style={{
          height: 80,
          boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
        }}
        button="Settings"
      ></HeaderX>
      <Body>
        <Background>
          <Rect7>
            <FeedbackBox>
              <Text4Column>
                <Text4>FEEDBACK</Text4>
                <Text42>Your feedback is very important to us.</Text42>
                <Form>
                  <Name>
                    <EvilIconsIcon
                      name={props.iconName || "user"}
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: 30,
                        marginLeft: 20,
                        alignSelf: "center"
                      }}
                    ></EvilIconsIcon>
                    <TextInput2 placeholder="Stan Smith"></TextInput2>
                  </Name>
                  <NameFiller></NameFiller>
                  <Email>
                    <FontAwesomeIcon
                      name={props.iconName || "envelope-o"}
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: 18,
                        marginLeft: 23,
                        alignSelf: "center"
                      }}
                    ></FontAwesomeIcon>
                    <TextInput3 placeholder="stan@stansmith.com"></TextInput3>
                  </Email>
                </Form>
              </Text4Column>
              <Text4ColumnFiller></Text4ColumnFiller>
              <Rect8>
                <TextInput4Stack>
                  <TextInput4 placeholder="Write something..."></TextInput4>
                  <IoniconsIcon
                    name="md-arrow-forward"
                    style={{
                      position: "absolute",
                      color: "rgba(255,255,255,1)",
                      fontSize: 25,
                      right: 0,
                      top: 11
                    }}
                  ></IoniconsIcon>
                </TextInput4Stack>
              </Rect8>
            </FeedbackBox>
          </Rect7>
        </Background>
        <Map>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
            defaultZoom={4}
            provider="MapView.PROVIDER_GOOGLE"
            defaultCenter={{
              latitude: 37.78825,
              lat: 20.5937,
              lng: 78.9629
            }}
            customMapStyle="Silver"
          />
        </Map>
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
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: 1px;
`;

const Background = styled.div`
  height: 330px;
  flex-direction: column;
  display: flex;
`;

const Rect7 = styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(31,178,204,1) 100%);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const FeedbackBox = styled.div`
  height: 330px;
  flex-direction: column;
  display: flex;
`;

const Text4 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 24px;
  font-weight: bold;
  margin-left: 78px;
`;

const Text42 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-top: 8px;
  align-self: center;
`;

const Form = styled.div`
  height: 112px;
  flex-direction: column;
  display: flex;
  margin-top: 20px;
`;

const Name = styled.div`
  height: 50px;
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput2 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const NameFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Email = styled.div`
  height: 50px;
  background-color: rgba(251,247,247,0.3);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput3 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 19px;
  margin-top: 10px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Text4Column = styled.div`
  flex-direction: column;
  margin-top: 39px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
`;

const Text4ColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect8 = styled.div`
  border-color: rgba(255,255,255,1);
  border-width: 0px;
  border-bottom-width: 1px;
  height: 49px;
  flex-direction: column;
  display: flex;
  margin-bottom: 29px;
  margin-left: 40px;
  margin-right: 28px;
  border-style: solid;
`;

const TextInput4 = styled.input`
  font-family: Arial;
  top: 0px;
  left: 0px;
  color: rgba(255,255,255,1);
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-size: 12px;
  border: none;
  background: transparent;
`;

const TextInput4Stack = styled.div`
  flex: 1 1 0%;
  margin-bottom: 1px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Map = styled.div`
  flex: 1 1 0%;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
`;

export default Feedback;
