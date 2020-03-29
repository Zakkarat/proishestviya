import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBInput
} from "mdbreact";

const CardExample = () => {
  const [occassion, setOccassion] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [submited, setSubmited] = useState(false);
  useEffect(() => {
    const setDate = async () => {
      const data = await fetch("/proishestviya").then(
        async data => await data.json()
      );
      const calcTime = ({ time }) => {
        if (time) {
          let difference = new Date().getTime() - time;
          const hoursDifference = Math.floor(difference / 1000 / 60 / 60);
          difference -= hoursDifference * 1000 * 60 * 60;

          const minutesDifference = Math.floor(difference / 1000 / 60);
          difference -= minutesDifference * 1000 * 60;
          return { hours: hoursDifference, minutes: minutesDifference };
        }
      };
      setLastDate(calcTime(data[data.length - 1]));
    };
    setDate();
    console.log(lastDate);
  }, []);

  const handleHours = () => {
    if (lastDate) {
      return lastDate.hours === 1
        ? "час"
        : lastDate.hours > 1 && lastDate.hours < 5
        ? "часа"
        : "часов";
    }
    return "";
  };

  const handleClick = () => {
    console.log(lastDate);
    fetch("/proishestviya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ story: occassion })
    }).then(res => {
      console.log(res);
    });
    setOccassion("");
    setSubmited(true); 
  };
  return (
    <MDBCol>
      <MDBCard>
        {!submited ? <><MDBCardImage
          className="img-fluid mx-auto rounded-circle mt-3"
          style={{ height: "300px" }}
          src="./natalie.jpg"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle className="black-text">
            Что-то случилось с Натали? А то не случалось уже целых{" "}
            {`${lastDate.hours ? `${lastDate.hours} ${handleHours()}` : ""} ${
              lastDate.minutes
            } минут!`}
            {() => {
              console.log(lastDate);
            }}
          </MDBCardTitle>
          <MDBCardText>
            <MDBInput
              value={occassion}
              onChange={({ target }) => setOccassion(target.value)}
              label="А что случилось?"
              onKeyDown={(e) => e.key === 'Enter' ? handleClick() : null }
            />
          </MDBCardText>
          <MDBBtn onClick={handleClick} href="#">
            Объявить об этом на весь мир!
          </MDBBtn>
          </MDBCardBody></> : <><MDBCardImage
          className="img-fluid mx-auto rounded-circle mt-3"
          style={{ height: "300px" }}
          src="./natalie.jpg"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle className="black-text">
            Cпасибо, что уведомили! Теперь это можно просмотреть в истории наших проишествий!
          </MDBCardTitle>
          </MDBCardBody></>}
      </MDBCard>
    </MDBCol>
  );
};

export default CardExample;
