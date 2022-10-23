import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Rodape() {
  return (
    <Infos>
      <Link to="/habitos" style={{ textDecoration: "none" }}>
        <p className="habitos">Hábitos</p>
      </Link>
      <Link to="/hoje" style={{ textDecoration: "none" }}>
        <div className="hoje">Hoje</div>
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
  .hoje {
    height: 91px;
    width: 91px;
    left: 142px;
    top: 566px;
    border-radius: 0px;
    background-color: #52b6ff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  p {
    color: #52b6ff;

    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
