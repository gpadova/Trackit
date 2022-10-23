import styled from "styled-components";
import LogoPequeno from "../imagens/logoPequeno.png";

export default function Cabecalho({ image }) {
  return (
    <>
      <Logo>
        <img className="logo-pequena" src={LogoPequeno} alt="" />
        <img className="profile-picture" src={image} alt="" />
      </Logo>
    </>
  );
}

const Logo = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px 0px #00000026;
  position: fixed;
  top: 0;
  left: 0;
  
  

  .logo-pequena {
    width: 97px;
    height: 35px;
    margin-left: 18px;
    margin-top: 15px;
  }
  .profile-picture {
    height: 51px;
    width: 51px;
    left: 306px;
    top: 9px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 9px;
`;
