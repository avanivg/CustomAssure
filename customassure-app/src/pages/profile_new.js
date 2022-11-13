import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './profile_new.css';
import Plot from 'react-plotly.js';

export default function ProfilePage() {
  return (
    <section className="full" style={{ backgroundColor: '#FFFFFF' }}>
      <MDBContainer className="py-5" >
        <MDBRow className="profile">
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
              <div class="card text-center">
                   <div class = "card-body">
                   <h1> 86% </h1>
                      <p> Average Customer Satisfaction</p>
                      <a href="./home" class="btn btn-primary">See Conversations</a>
                    </div>                  
                  </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Temoc</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <div class="row_graph">
                <Plot
                      data={[
                        {
                          x: [1, 2, 3, 4, 5],
                          y: [-3, -1, 0, 2, 3],
                          type: 'scatter',
                          fill: 'tonexty',
                          mode: 'lines+markers',
                          marker: {color: '#ED7014'},
                        },
                      ]}
                      layout={ 
                        {
                          title: 'Customer Satisfaction',
                          width: 280, 
                          height: 300,
                          xaxis: { title:{ text: 'Time (In Weeks)' } },
                          yaxis: { title:{ text: 'Emotional Satisfaction <br> (Negative: -3 & Positive 3)'} }
                        } 
                      }
                  />
                  <Plot
                      data={[
                        {
                          x: [1, 2, 3, 4, 5, 6, 7],
                          y: [70, 89, 75, 79, 95, 83, 93],
                          type: 'scatter',
                          fill: 'tonexty',
                          mode: 'lines+markers',
                          marker: {color: '#ED7014'},
                        },
                      ]}
                      layout={ 
                        {
                          title: 'Employee Performance',
                          width: 280, 
                          height: 300,
                          xaxis: { title:{ text: 'Time (In Weeks)'} },
                          yaxis: { title:{ text: 'Average Satisfaction <br> (Percentage)'} }
                        } 
                      }
                  />
            
            </div> 
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}