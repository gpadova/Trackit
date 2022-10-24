import styled from "styled-components"


export default function HabitoIndividual({habito, dia}){

    return (
        <HabitoDoDia>
            <div className="nome">
                <p>{habito.name} - {dia}</p>
            </div>
            <div className="info">
                <p>O Hábito foi completado? {habito.done ? "Sim" : "Não"}</p>
            </div>
        </HabitoDoDia>
    )
}

const HabitoDoDia = styled.div`
    height: 91px;
  width: 340px;
  left: 17px;
  top: 147px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  p{
    margin-left: 30px;
  }
`