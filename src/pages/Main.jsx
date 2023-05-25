import React from "react";
import styled from "styled-components";
//import date from "./data.json";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  height: 844px;
  background: #902443;
`;

const Whitebox = styled.div`
  position: relative;
  width: 80%;
  height: 560px;
  top: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
  margin: auto;
`;

const Logo = styled.div`
  position: relative;
  margin: auto;
  width: 81px;
  height: 81px;
  padding-top: 5%;
`;

const Text = styled.div`
  position: relative;
  padding-top: 5%;
  margin-left: auto;
  margin-right: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #5e162b;
`;

const ButtonInput = styled.button`
  position: relative;
  margin: auto;
  width: 93px;
  height: 36px;
  top: 40%;
  left: 46%;
  background: #902443;
  border-radius: 10px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;

const Slogan = styled.div`
  position: relative;
  margin: auto;
  top: 100px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
`;

const Main = () => {
  const navigate = useNavigate();

  const go = () => {
    navigate("/pass");
  };

  return (
    <Background>
      <Whitebox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 5.jpg`}
            alt="logo"
            width="81px"
          />
        </Logo>
        <Text>
          동덕여자대학교 멋쟁이사자처럼
          <br />
          11기 아기사자 합격자 발표
        </Text>
        <ButtonInput onClick={go}>입력</ButtonInput>
      </Whitebox>
      <Slogan>DONGDUK X LIKELION</Slogan>
    </Background>
  );
};
export default Main;
