import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Background = styled.div`
  position: relative;
  height: 844px;
  background: #fae4ea;
`;

const Whitebox = styled.div`
  position: relative;
  width: 32%;
  height: 571px;
  top: 10%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const Logo = styled.div`
  position: relative;
  margin: auto;
  width: 43px;
  height: 43px;
  padding-top: 5%;
`;

const Title = styled.div`
  position: relative;
  padding-top: 5%;
  width: 195px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: #000000;
`;

const Name0 = styled.div`
  position: relative;
  width: 120px;
  height: 23px;
  margin-left: 36%;
  top: 23px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #0075ff;
`;

const Name1 = styled.div`
  position: relative;
  width: 120px;
  height: 23px;
  margin-left: 55%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const Name2 = styled.div`
  position: relative;
  width: 120px;
  height: 23px;
  margin-left: 62%;
  margin-top: -22px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
`;

const Text = styled.div`
  position: relative;
  padding-top: 5%;
  width: 380px;
  height: 259px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;

const LetterPic = styled.div`
  position: relative;
  margin-left: -11%;
  margin-top: -30%;
`;

const Pass = () => {
  const location = useLocation();
  const name = location.state;

  return (
    <Background>
      <Whitebox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 5.jpg`}
            alt="Logo"
            width="43x"
          />
        </Logo>
        <Title>
          합격을
          <br />
          축하합니다!
        </Title>
        <Name0>{name}</Name0>
        <Name1>님</Name1>
        <Name2>은</Name2>
        <Text>
          동덕여대 멋사 11기에 최종합격 하셨습니다! 🎉
          <br />
          긴 선발 과정에 참여하시느라 고생 많으셨습니다.
          <br />
          자세한 사항은 discord를 통해 안내드리겠습니다.
          <br />
          <br />
          <a href="https://discord.gg/BSHH7mck" target="_blank">
            https://discord.gg/BSHH7mck
          </a>
          <br />
          <br />
          3월 17일까지 디스코드에 들어와주세요!
          <br />
          <br />
          3/26(일) 동덕 멋사 OT에서 만나요~
          <br />
          *장소 추후 안내 예정
        </Text>
        <LetterPic>
          <img
            src={`${process.env.PUBLIC_URL}/images/envelope.png`}
            alt="LetterPic"
            width="500px"
          />
        </LetterPic>
      </Whitebox>
    </Background>
  );
};
export default Pass;
