import FieldRow from "./field-row"
import RecordRow from "./record-row"
import styled from "@emotion/styled";

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Table1({ records }) {

  return (
    <Wrapper1 style={{maxWidth:"824px"}}>
      <FieldRow />
      {records
        .sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1)
        .map((userRecord, index) => {
            if (index%2==0) {
                return <RecordRow
                        firstName={userRecord.name.first}
                        lastName={userRecord.name.last}
                        age={userRecord.dob.age}
                        gender={userRecord.gender[0].toUpperCase()}
                        email={userRecord.email}
                        nationality={userRecord.nat}
                        photo={userRecord.picture.large}
                        backgroundColor={"#b4c5e5"}
                      />
            } else {
              return <RecordRow
                        firstName={userRecord.name.first}
                        lastName={userRecord.name.last}
                        age={userRecord.dob.age}
                        gender={userRecord.gender[0].toUpperCase()}
                        email={userRecord.email}
                        nationality={userRecord.nat}
                        photo={userRecord.picture.large}
                        backgroundColor={"#dce3f1"}
                      />
            }
          }
        )
      }
    </Wrapper1>
  );
}

export default Table1;
