import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBCardBody } from "mdbreact";
import Moment from 'react-moment'
import 'moment/locale/ru';
const History = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/proishestviya").then(
        async res => await res.json()
      );
      setData(data);
    };

    fetchData()
    console.log(data)
  }, []);
  return (
    <>
      <MDBRow className="mb-4">
      {data.reverse().map(elem => (
    <MDBCol xl="12" className='mb-5'>
    <MDBCard>
      <MDBCardBody>
      <MDBCardTitle style={{'color': 'black'}}>{elem.story}</MDBCardTitle>
        <MDBCardText>
      Вот такое с Натали случилось <Moment locale='ru' fromNow>{elem.time}</Moment>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
      ))}
      </MDBRow>
    </>
  );
};

export default History;
