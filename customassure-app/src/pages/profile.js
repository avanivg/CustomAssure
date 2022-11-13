
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
//column, row, then columns within the row

export default function Basic() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#ffffff' }}>
      <MDBContainer>
          {/* opening column: */}
      <MDBCol md="9" lg="7" xl="5" className="mt-5"> 
        <div class = "row" /*className="justify-content-left"*/>
        <div class="col d-flex flex-column justify-content-between">
        <MDBCol md="9" lg="7" xl="5" className="mt-5">
                {/* <div className="d-flex text-black"> */}
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '500px', borderRadius: '10px' }}
                      src={require('../images/temoc.jpg')}
                      alt='Temoc Headshot'
                      fluid />
                  </div>

                  <div class="col d-flex flex-column justify-content-between">
                  <div className="flex-grow-3 ms-5" width="5000px">
                    <h1>Temoc</h1> 
                    {/* employee name and role  */}
                    <h2>Comet</h2>
                  </div>
                  </div>

                  <div class="col d-flex flex-column">
                   <MDBCard style={{ borderRadius: '15px'}} >
                    <MDBCardBody className="cust-satisfaction-text">
                      <h1> 86% </h1>
                      <p> Average Customer Satisfaction</p>
                    </MDBCardBody>
                   </MDBCard>
                  </div>
          </MDBCol> 
          </div>
        </div>
        </MDBCol> 
      </MDBContainer>
    </div>
  );
}