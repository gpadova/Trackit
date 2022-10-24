import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import BotoesDiaSemanaCadastrados from "./BotoesDiaSemanaCadastrados";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function ListaDeHabitos({objeto, token, verificaMudanca, setVerificaMudanca}) {
  
  
  URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${objeto.id}`
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  function deletaHabito(e){
    // e.preventDefault()
    axios.delete(URL, config)
    .then(setVerificaMudanca(!verificaMudanca))
    .catch((res) => console.log(res.message))
  }


  return (
    <HabitosCadastrados key={objeto.id}>
      <div className="topo">
        <p>{objeto.name}</p>
        <BiTrash onClick={() => deletaHabito()}/>
      </div>
        <BotoesDiaSemanaCadastrados days={objeto.days}/>
  
    </HabitosCadastrados>
  );
}

const HabitosCadastrados = styled.div`
  height: 91px;
  width: 340px;
  left: 17px;
  top: 147px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  .topo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
