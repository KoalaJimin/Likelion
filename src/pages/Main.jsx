import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
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

const Name = styled.div`
  position: relative;
  width: 14px;
  height: 0px;
  left: 38%;
  top: 40px;
  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const NameText = styled.div`
  position: relative;
  width: 50px;
  height: 26px;
  left: 40%;
  top: 25px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

const Namebox = styled.input`
  position: absolute;
  width: 250px;
  height: 35px;
  left: 38%;
  top: 52%;
  background: #cd99a6;
  border-radius: 50px;
`;

const Phone = styled.div`
  position: absolute;
  width: 12px;
  height: 0px;
  left: 38%;
  top: 65%;
  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const PhoneText = styled.div`
  position: absolute;
  width: 100px;
  height: 26px;
  left: 40%;
  top: 64%;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

const Phonebox = styled.input`
  position: absolute;
  width: 250px;
  height: 35px;
  left: 38%;
  top: 69%;
  background: #cd99a6;
  border-radius: 50px;
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

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const go = () => {
    let foundMatch = false;

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].name === name &&
        data[i].phone === phoneNumber &&
        data[i].pass === 1
      ) {
        navigate("/Pass", { state: data[i].name });
        foundMatch = true;
        break;
      } else if (
        data[i].name === name &&
        data[i].phone === phoneNumber &&
        data[i].pass === 0
      ) {
        navigate("/Fail");
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      alert(
        "등록되지 않은 성함/번호입니다. 성함과 번호를 다시 한 번 확인해주세요!"
      );
    }
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
        <Name></Name>
        <NameText>성함</NameText>
        <Namebox type="text" value={name} onChange={handleNameChange}></Namebox>
        <Phone></Phone>
        <PhoneText>전화번호</PhoneText>
        <Phonebox
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        ></Phonebox>
        <ButtonInput onClick={go}>입력</ButtonInput>
      </Whitebox>
      <Slogan>DONGDUK X LIKELION</Slogan>
    </Background>
  );
};
export default Main;
