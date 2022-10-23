import styled from "styled-components";

export default function AvisoSemHabitos() {
  return (
    <>
      <Aviso>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Aviso>
    </>
  );
}

const Aviso = styled.div`
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #666666;
  margin-left: 19px;
;
`;
