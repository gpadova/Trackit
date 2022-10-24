import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Rodape() {
  const percentage = 66;

  return (
    <Infos>
      <Link to="/habitos" style={{ textDecoration: "none" }}>
        <p className="habitos">Hábitos</p>
      </Link>
      <Link to="/hoje" style={{ textDecoration: "none" }}>
        <CaixaHoje>
          <CircularProgressbar
            background={true}
            value={percentage}
            text={`Hoje`}
            styles={buildStyles({
              textSize: "22px",
              textColor: "#FFFFFF",
              trailColor: "#52B6FF",
              backgroundColor: "#52B6FF",
              pathColor: "#FFFFFF",
            })}
          />
        </CaixaHoje>
      </Link>
      <Link to="/historico" style={{ textDecoration: "none" }}>
        <p className="historico">Histórico</p>
      </Link>
    </Infos>
  );
}

const Infos = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 18px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  padding-bottom: 10px;

  p {
    color: #52b6ff;

    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const CaixaHoje = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  padding: 5px;
  background-color: #52b6ff;
  border-radius: 50%;
  color: #ffffff;
  font-size: 18px;
  font-family: Lexend Deca;
  font-weight: 500;
  text-decoration: none;
`;
