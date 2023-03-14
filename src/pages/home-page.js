import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { CSVLink} from "react-csv";
import { getUsersData } from "../services/random-user-api";
import Table1 from "../components/table1/table1"

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Wrapper4 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text3 = styled.p`
  font-size: 16px;
  line-height: 120%;
  font-weight: 700;
  color: black;
`;

const Button = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:10px 10px;
    gap: 4px;

    border:none;
    border-radius: 8px;
    width: ${(props) => props.width || '150px'};
    height: ${(props) => props.height || '40px'};
    background: ${(props) => props.color || 'pink'};
    font-size: 14px;
    line-height: 120%;
    font-weight: 400;
    color: black;
    cursor:pointer;
`;

function HomePage() {
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    getUsersData(15)
      .then((data) => {
        setUsersData(data.results)
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {usersData ?
        <Wrapper1 style={{gap:"20px", marginTop:"30px", marginBottom:"20px"}}>
          <Table1 records={usersData} />
          <CSVLink
            data={usersData}
            filename={"tabla-shield-users.csv"}
            style={{textDecoration:"none"}}
            >
              <Button>
                Download data in csv format
              </Button>
          </CSVLink>
        </Wrapper1>
        :
        <></>
      }
    </>
  )
}

export default HomePage;
