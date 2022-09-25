import { Space } from "antd";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Desktop, Mobile } from "../components/responsive/mediaQueries";
import fire from "../img/gifFuoco.gif";

const ContainerPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2vh;
  width: 80vh;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  border-radius: 20px;
`;

const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const ContainerName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 30px;
`;

const ContainerScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 40px;
`;

const ContainerDamage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
`;

const InputDamage = styled.input`
  background-color: transparent;
  width: 100px;
  border: none;
  font-size:15px;
  border-bottom: 2px solid rgba(31, 38, 135, 0.37);
  &:focus {
    outline:none;
    background-color: rgba(15, 19, 67, 0.37);
`;

const AttackButton = styled.button`
  background-color: rgba(31, 38, 135, 0.37);
  border: none;
  padding: 1vh 2vh 1vh 2vh;
  border-radius: 10px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    background-color: rgba(15, 19, 67, 0.37);
  }
  &:active {
    background-color: #720909;
    transform: scale(1.1);
    transform-origin: center;
  }
`;

const ContainerPlayerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2vh;
  width: 90vw;
  height: 40vh;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  ${(props) =>
    props.rotated &&
    css`
      transform: rotate(180deg);
    `}
`;

const ContainerAvatarMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vh;
`;

const ContainerNameMobile = styled.div`
  margin-top: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 5vh;
  font-size: 2vh;
`;

const ContainerScoreMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 5vh;
  font-size: 3vh;
`;

const ContainerDamageMobile = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 5vh;
`;

const InputDamageMobile = styled.input`
  background-color: transparent;
  width: 30vw;
  border: none;
  font-size:15px;
  border-bottom: 2px solid rgba(31, 38, 135, 0.37);
  &:focus {
    outline:none;
    background-color: rgba(15, 19, 67, 0.37);
`;

const AttackButtonMobile = styled.button`
  background-color: rgba(31, 38, 135, 0.37);
  border: none;
  padding: 1vh 2vh 1vh 2vh;
  border-radius: 10px;
  font-size: 2vh;

  &:hover {
    cursor: pointer;
    background-color: rgba(15, 19, 67, 0.37);
  }
  &:active {
    background-color: #720909;
    transform: scale(1.1);
    transform-origin: center;
  }
`;

const Player = ({ name, avatar, rotated }) => {
  const [score, setScore] = useState(8000);
  const [damage, setDamage] = useState(0);

  const attack = async () => {
    const newScore = await calculateDamage();
    await checkVicotory(newScore);
    // await resetField();
  };

  //   const resetField = async () => {

  //   };

  const calculateDamage = async () => {
    return score - damage;
  };

  const checkVicotory = async (newScore) => {
    if (newScore <= 0) {
      setScore("HAI PERSO!");
    } else setScore(newScore);
  };

  return (
    <>
      <Desktop>
        <ContainerPlayer>
          <ContainerAvatar>
            <img
              src={avatar}
              alt="avatar"
              style={{ height: "36vh", marginTop: "-15vh" }}
            ></img>
          </ContainerAvatar>
          <ContainerName>{name}</ContainerName>
          <ContainerScore>{score}</ContainerScore>
          <ContainerDamage>
            <Space>
              <InputDamage
                onChange={(e) => {
                  setDamage(e.target.value);
                }}
                id="inputDamaged"
              ></InputDamage>
              <AttackButton onClick={() => attack()}>MAKE DAMAGE</AttackButton>
            </Space>
          </ContainerDamage>
        </ContainerPlayer>
      </Desktop>
      <Mobile>
        <ContainerPlayerMobile rotated={rotated}>
          <ContainerAvatarMobile>
            <img
              src={avatar}
              alt="avatar"
              style={{ height: "23vh", zIndex: "99", marginTop: "4vh" }}
            ></img>
          </ContainerAvatarMobile>
          <ContainerNameMobile>{name}</ContainerNameMobile>
          <ContainerScoreMobile>{score}</ContainerScoreMobile>
          <ContainerDamageMobile>
            <Space>
              <InputDamageMobile
                onChange={(e) => {
                  setDamage(e.target.value);
                }}
                id="inputDamage"
              ></InputDamageMobile>
              <AttackButtonMobile onClick={() => attack()}>
                MAKE DAMAGE
              </AttackButtonMobile>
            </Space>
          </ContainerDamageMobile>
        </ContainerPlayerMobile>
      </Mobile>
    </>
  );
};

export default Player;
