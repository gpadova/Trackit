import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import BotoesDiaSemanaCadastrados from "./BotoesDiaSemanaCadastrados";
import axios from "axios";

export default function ListaDeHabitos({objeto, token}) {
  URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO"
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  function deletaHabito(e){
    e.preventDefault()
    axios.delete(URL, config)
    .then()
  }
  
  return (
    <HabitosCadastrados key={objeto.id}>
      <div className="topo">
        <p>{objeto.name}</p>
        <BiTrash />
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
