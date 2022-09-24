import React, { createContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../css/style.css";
import Player from "../modules/Player";
import delImg from "../img/del.png";
import edImg from "../img/Ed.webp";
import edSkeletonImg from "../img/skeletonEdd.png";
import eddImg from "../img/edd.png";
import eddyImg from "../img/eddy.png";
import rolfImg from "../img/rolf.webp";
import kevinImg from "../img/kevin.webp";
import tavolettaImg from "../img/tavoletta.png";
import setoImg from "../img/seto.png";
import sliferImg from "../img/slifer.png";
import dragoOcchiBluImg from "../img/dragoOcchiBlu.png";
import exodiaImg from "../img/Exodia.png";
import magoNeroImg from "../img/magoNero.png";
import yugiImg from "../img/yugi.png";
import gokuUiImg from "../img/gokuUi.png";
import gokuMUiImg from "../img/gokuMUi.png";
import gokuSSJImg from "../img/gokuSSJ.png";
import vegetaSSBImg from "../img/vegetaSSB.png";
import gohanSSJ2Img from "../img/gohanTeenSSJ2.png";
import friezaImg from "../img/frieza.png";
import whisImg from "../img/whis.png";
import leoneImg from "../img/leone.png";
import giustinoImg from "../img/giustino.png";
import styled, { css } from "styled-components";
import { Button, Form, Select } from "antd";
import { Desktop, Mobile } from "./responsive/mediaQueries";

const { Option } = Select;

export const GlobalContext = createContext({});

const GameDiv = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-around;
`;

const GameDivMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 1vh;
  width: 80vw;
  height: 100vh;
`;

const RestartButton = styled.button`
  position: absolute;
  top: 10vh;
  background-color: rgba(31, 38, 135, 0.37);
  border: none;
  padding: 1vh 2vh 1vh 2vh;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: rgba(15, 19, 67, 0.37);
`;

const RestartButtonMobile = styled.button`
  position: absolute;
  top: 48vh;
  left:70vw;
  background-color: rgba(31, 38, 135, 0.37);
  border: none;
  padding: 0.5vh 1vh 0.5vh 1vh;
  border-radius: 10px;
  font-size:2vh;
  &:hover {
    cursor: pointer;
    background-color: rgba(15, 19, 67, 0.37);
`;

const SelectForm = styled.select`
  background-color: transparent;
  width: 200px;
  border: none;
  border-bottom: 1px solid rgba(31, 38, 135, 0.37);
`;

const StartButton = styled.button`
  background-color: rgba(31, 38, 135, 0.37);
  border: none;
  padding: 1vh 2vh 1vh 2vh;
  border-radius: 10px;
  font-size: 18px;
  color: whitesmoke;
  &:hover {
    cursor: pointer;
    background-color: rgba(15, 19, 67, 0.37);
  }
  &:active {
    background-color: white;
    transform: scale(1.1);
    transform-origin: center;
  }
`;

const App = () => {
  const [avatarPlayer1, setAvatarPlayer1] = useState();
  const [avatarPlayer2, setAvatarPlayer2] = useState();
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [isSelecting, setIsSelecting] = useState(true);

  const delPlayer = {
    name: "del",
    avatar: delImg,
  };

  const lebPlayer = {
    name: "leb",
    avatar: edImg,
  };

  const samPlayer = {
    name: "sam",
    avatar: edImg,
  };

  const guPlayer = {
    name: "gu",
    avatar: edImg,
  };

  const erikPlayer = {
    name: "erik",
    avatar: edImg,
  };

  const guestPlayer = {
    name: "guest",
    avatar: edImg,
  };

  const players = [
    delPlayer,
    lebPlayer,
    samPlayer,
    guestPlayer,
    guPlayer,
    erikPlayer,
  ];

  const edAvatar = {
    name: "edAvatar",
    avatar: edImg,
  };

  const eddAvatar = {
    name: "eddAvatar",
    avatar: eddImg,
  };
  const eddyAvatar = {
    name: "eddyAvatar",
    avatar: eddyImg,
  };
  const rolfAvatar = {
    name: "rolfAvatar",
    avatar: rolfImg,
  };
  const kevinAvatar = {
    name: "kevinAvatar",
    avatar: kevinImg,
  };
  const tavolettaAvatar = {
    name: "tavolettaAvatar",
    avatar: tavolettaImg,
  };
  const setoAvatar = {
    name: "setoAvatar",
    avatar: setoImg,
  };
  const magoNeroAvatar = {
    name: "magoNeroAvatar",
    avatar: magoNeroImg,
  };
  const exodiaAvatar = {
    name: "exodiaAvatar",
    avatar: exodiaImg,
  };
  const sliferAvatar = {
    name: "sliferAvatar",
    avatar: sliferImg,
  };
  const yugiAvatar = {
    name: "yugiAvatar",
    avatar: yugiImg,
  };
  const dragoOcchiBluAvatar = {
    name: "dragoOcchiBluAvatar",
    avatar: dragoOcchiBluImg,
  };
  const gokuUiAvatar = {
    name: "gokuUiAvatar",
    avatar: gokuUiImg,
  };
  const gokuMUiAvatar = {
    name: "gokuMUiAvatar",
    avatar: gokuMUiImg,
  };
  const gokuSSJAvatar = {
    name: "gokuSSJAvatar",
    avatar: gokuSSJImg,
  };
  const gohanSSJ2Avatar = {
    name: "gohanSSJ2Avatar",
    avatar: gohanSSJ2Img,
  };
  const vegetaSSBAvatar = {
    name: "vegetaSSBAvatar",
    avatar: vegetaSSBImg,
  };
  const whisAvatar = {
    name: "whisAvatar",
    avatar: whisImg,
  };
  const edSkeletonAvatar = {
    name: "edSkeletonAvatar",
    avatar: edSkeletonImg,
  };
  const leoneAvatar = {
    name: "leoneAvatar",
    avatar: leoneImg,
  };
  const giustinoAvatar = {
    name: "giustinoAvatar",
    avatar: giustinoImg,
  };
  const friezaAvatar = {
    name: "friezaAvatar",
    avatar: friezaImg,
  };

  const avatars = [
    edAvatar,
    edSkeletonAvatar,
    eddAvatar,
    eddyAvatar,
    rolfAvatar,
    kevinAvatar,
    tavolettaAvatar,
    setoAvatar,
    magoNeroAvatar,
    exodiaAvatar,
    sliferAvatar,
    dragoOcchiBluAvatar,
    yugiAvatar,
    gokuUiAvatar,
    gokuMUiAvatar,
    gokuSSJAvatar,
    friezaAvatar,
    gohanSSJ2Avatar,
    vegetaSSBAvatar,
    leoneAvatar,
    giustinoAvatar,
    whisAvatar,
  ];

  const onFinish = (e) => {
    // setAvatarPlayer1(e.player1);
    // setAvatarPlayer2(e.player2);
    executeSelected(e);
  };

  const startSelecting = async () => {
    setIsSelecting(true);
  };

  const endSelecting = async () => {
    setIsSelecting(false);
  };

  const executeSelected = async (e) => {
    await setPlayers(e);
    await endSelecting();
  };

  const setPlayers = async (e) => {
    const playerOne = e.player1;
    const playerTwo = e.player2;
    const avatarOne = e.avatar1;
    const avatarTwo = e.avatar2;

    players.map((player) => {
      if (playerOne.startsWith(player.name)) {
        setPlayer1(player.name);
      } else if (playerTwo.startsWith(player.name)) {
        setPlayer2(player.name);
      }
    });
    avatars.map((avatar) => {
      if (avatarOne === avatar.name) {
        setAvatarPlayer1(avatar.avatar);
      } else if (avatarTwo === avatar.name) {
        setAvatarPlayer2(avatar.avatar);
      }
    });
  };

  // per le magie terreno
  const changeBackground = (e) => {
    // document.getElementById("idBodyGame").classList.add("fuoco");
    if (e === "fuoco") {
      document.getElementById("idBodyGame").classList.remove("sfondoBase");
      document.getElementById("idBodyGame").classList.remove("ghiaccio");
      document.getElementById("idBodyGame").classList.add("fuoco");
      document.getElementById("idBodyGame").classList.remove("oscurita");
    } else if (e === "ghiaccio") {
      document.getElementById("idBodyGame").classList.remove("sfondoBase");
      document.getElementById("idBodyGame").classList.add("ghiaccio");
      document.getElementById("idBodyGame").classList.remove("fuoco");
      document.getElementById("idBodyGame").classList.remove("oscurita");
    } else if (e === "oscurita") {
      document.getElementById("idBodyGame").classList.remove("sfondoBase");
      document.getElementById("idBodyGame").classList.add("ghiaccio");
      document.getElementById("idBodyGame").classList.remove("fuoco");
      document.getElementById("idBodyGame").classList.add("oscurita");
    } else if (e === "default") {
      document.getElementById("idBodyGame").classList.add("sfondoBase");
      document.getElementById("idBodyGame").classList.remove("ghiaccio");
      document.getElementById("idBodyGame").classList.remove("fuoco");
      document.getElementById("idBodyGame").classList.remove("oscurita");
    }
  };

  return isSelecting ? (
    <div
      className="bodyDiv"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
      id="idBodyForm"
    >
      <Form
        style={{
          width: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(20px)",
          borderRadius: " 20px",
        }}
        className="formSelectPlayers"
        onFinish={(e) => onFinish(e)}
      >
        <h2
          style={{
            color: "whitesmoke",
            marginBlock: "3vh",
          }}
        >
          Seleziona Giocatori
        </h2>
        <div>
          <h3 style={{ color: "whitesmoke" }}>Giocatore 1</h3>
          <label htmlFor="player1">Seleziona giocatore:</label>
          <Form.Item name="player1">
            <Select>
              <Option value="del">DEL</Option>
              <Option value="leb">LEB</Option>
              <Option value="sam">SAM</Option>
              <Option value="gu">GU</Option>
              <Option value="erik">ERIK</Option>
              <Option value="guest">GUEST</Option>
            </Select>
          </Form.Item>
          <Form.Item name="avatar1">
            <Select>
              <Option value="edAvatar">ED</Option>
              <Option value="eddAvatar">EDD</Option>
              <Option value="eddyAvatar">EDDY</Option>
              <Option value="edSkeletonAvatar">SKELETON ED</Option>
              <Option value="rolfAvatar">ROLF</Option>
              <Option value="kevinAvatar">KEVIN</Option>
              <Option value="tavolettaAvatar">TAVOLETTA</Option>
              <Option value="yugiAvatar">YUGI</Option>
              <Option value="setoAvatar">SETO</Option>
              <Option value="magoNeroAvatar">MAGO NERO</Option>
              <Option value="exodiaAvatar">EXODIA</Option>
              <Option value="sliferAvatar">SLIFER</Option>
              <Option value="dragoOcchiBluAvatar">
                DRAGO BIANCO OCCHI BLU
              </Option>
              <Option value="gokuSSJAvatar">GOKU SSJ</Option>
              <Option value="gokuUiAvatar">GOKU UI</Option>
              <Option value="gokuMUiAvatar">GOKU MUI</Option>
              <Option value="vegetaSSBAvatar">VEGETA SSB</Option>
              <Option value="gohanSSJ2Avatar">GOHAN SSJ2</Option>
              <Option value="friezaAvatar">FRIEZA</Option>
              <Option value="whisAvatar">WHIS</Option>
              <Option value="leoneAvatar">LEONE</Option>
              <Option value="giustinoAvatar">GIUSTINO</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <h3 style={{ color: "whitesmoke" }}>Giocatore 2</h3>
          <label htmlFor="player2">Seleziona giocatore:</label>
          <Form.Item name="player2">
            <Select>
              <Option value="del">DEL</Option>
              <Option value="leb">LEB</Option>
              <Option value="sam">SAM</Option>
              <Option value="gu">GU</Option>
              <Option value="erik">ERIK</Option>
              <Option value="guest">GUEST</Option>
            </Select>
          </Form.Item>
          <Form.Item name="avatar2">
            <Select>
              <Option value="edAvatar">ED</Option>
              <Option value="eddAvatar">EDD</Option>
              <Option value="eddyAvatar">EDDY</Option>
              <Option value="edSkeletonAvatar">SKELETON ED</Option>
              <Option value="rolfAvatar">ROLF</Option>
              <Option value="kevinAvatar">KEVIN</Option>
              <Option value="tavolettaAvatar">TAVOLETTA</Option>
              <Option value="yugiAvatar">YUGI</Option>
              <Option value="setoAvatar">SETO</Option>
              <Option value="magoNeroAvatar">MAGO NERO</Option>
              <Option value="exodiaAvatar">EXODIA</Option>
              <Option value="sliferAvatar">SLIFER</Option>
              <Option value="dragoOcchiBluAvatar">
                DRAGO BIANCO OCCHI BLU
              </Option>
              <Option value="gokuSSJAvatar">GOKU SSJ</Option>
              <Option value="gokuUiAvatar">GOKU UI</Option>
              <Option value="gokuMUiAvatar">GOKU MUI</Option>
              <Option value="vegetaSSBAvatar">VEGETA SSB</Option>
              <Option value="gohanSSJ2Avatar">GOHAN SSJ2</Option>
              <Option value="friezaAvatar">FRIEZA</Option>
              <Option value="whisAvatar">WHIS</Option>
              <Option value="leoneAvatar">LEONE</Option>
              <Option value="giustinoAvatar">GIUSTINO</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <Form.Item>
            <StartButton htmlType="submit">GIOCA!</StartButton>
          </Form.Item>
        </div>
      </Form>
    </div>
  ) : (
    <>
      <Desktop>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
          className="bodyDiv"
          id="idBodyGame"
        >
          <RestartButton onClick={() => setIsSelecting(true)}>
            RESTART
          </RestartButton>
          <Select
            onChange={(e) => {
              changeBackground(e);
            }}
            style={{
              position: "absolute",
              top: "40vh",
              width: "200px",
              zIndex: "99",
            }}
            defaultValue="Cambia terreno"
          >
            <Option value="fuoco">FUOCO</Option>
            <Option value="ghiaccio">GHIACCIO</Option>
            <Option value="oscurita">OSCURITÀ</Option>
            <Option value="default">BASE</Option>
          </Select>

          <GameDiv>
            <Player name={player1?.toUpperCase()} avatar={avatarPlayer1} />
            <div style={{ display: "flex", alignItems: "center" }}>VS</div>
            <Player name={player2?.toUpperCase()} avatar={avatarPlayer2} />
          </GameDiv>
        </div>
      </Desktop>
      <Mobile>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
          className="bodyDiv"
          id="idBodyGame"
        >
          <RestartButtonMobile
            className="rotated"
            onClick={() => setIsSelecting(true)}
          >
            RESTART
          </RestartButtonMobile>
          <Select
            style={{
              position: "absolute",
              top: "48vh",
              left: "3vw",
              width: "120px",
              fontSize: "1vh",
              transform: "rotate(90deg)",
              background: "transparent",
            }}
            defaultValue="Cambia terreno"
            onChange={(e) => {
              changeBackground(e);
            }}
          >
            <Option value="fuoco">FUOCO</Option>
            <Option value="ghiaccio">GHIACCIO</Option>
            <Option value="oscurita">OSCURITÀ</Option>
            <Option value="default">BASE</Option>
          </Select>
          <GameDivMobile>
            <Player
              name={player2?.toUpperCase()}
              avatar={avatarPlayer2}
              rotated={true}
            />
            <div
              className="rotated"
              style={{ display: "flex", alignItems: "center" }}
            >
              VS
            </div>
            <Player name={player1?.toUpperCase()} avatar={avatarPlayer1} />
          </GameDivMobile>
        </div>
      </Mobile>
    </>
  );
};

export default App;
