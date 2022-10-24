import styled from "styled-components";
import HabitoIndividual from "./HabitoIndividual";

export default function HabitoDia({ dia }) {
  console.log(dia);
  return (
    <>
      <GlobalWrapper>
        <h3>Dia: {dia.day}</h3>
        {dia.habits.map((habito, indi) => (
          <HabitoIndividual habito={habito} dia={dia.day} />
        ))}
      </GlobalWrapper>
    </>
  );
}

const GlobalWrapper = styled.div`
margin-top: 30px;
`;
