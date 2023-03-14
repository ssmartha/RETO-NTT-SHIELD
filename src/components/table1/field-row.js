import styled from "@emotion/styled";

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text1 = styled.p`
  font-size: 16px;
  line-height: 120%;
  font-weight: 600;
  color: white;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #4d77c4;
  border-style: solid;
  border-color: #FFFFFF;
  padding: 10px 12px 10px 12px;
`;

function FieldRow() {
  return (
    <Wrapper3>
      <FieldContainer style={{width:"95px", borderWidth:"1px 0px 1px 1px"}}>
        <Text1>
        Nombre
        </Text1>
      </FieldContainer>
      <FieldContainer style={{width:"95px", borderWidth:"1px 0px 1px 1px"}}>
        <Text1>
        Apellido
        </Text1>
      </FieldContainer>
      <FieldContainer style={{width:"95px", borderWidth:"1px 0px 1px 1px", alignItems:"center"}}>
        <Text1>
        Edad
        </Text1>
      </FieldContainer>
      <FieldContainer style={{width:"95px", borderWidth:"1px 0px 1px 1px", alignItems:"center"}}>
        <Text1>
        Genero
        </Text1>
      </FieldContainer>
      <FieldContainer style={{width:"245px", borderWidth:"1px 0px 1px 1px"}}>
        <Text1>
        Email
        </Text1>
      </FieldContainer>
      <FieldContainer style={{width:"120px", borderWidth:"1px 0px 1px 1px", alignItems:"center"}}>
        <Text1>
        Nacionalidad
        </Text1>
      </FieldContainer>
      <FieldContainer style={{width:"95px", borderWidth:"1px 0px 1px 1px", alignItems:"center"}}>
        <Text1>
        Foto
        </Text1>
      </FieldContainer>
    </Wrapper3>
  );
}

export default FieldRow;
