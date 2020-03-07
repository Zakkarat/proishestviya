import React, {useState} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBInput } from 'mdbreact';
import { toFile, fromFile } from '../../toFile'

const CardExample = () => {
  const [occassion, setOccasion] = useState('');

  const handleClick = () => {
    
  }
  return (
    <MDBCol>
      <MDBCard >
        <MDBCardImage className="img-fluid mx-auto rounded-circle mt-3" style={{height: '300px'}} src="./natalie.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle className="black-text">Что-то случилось с Натали? А то не случалось уже </MDBCardTitle>
          <MDBCardText>
          <MDBInput value={occassion} onChange={({target}) => setOccasion(target.value)} label="А что случилось?" />
          </MDBCardText>
          <MDBBtn onClick={handleClick} href="#">Объявить об этом на весь мир!</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;