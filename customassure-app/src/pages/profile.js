
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import './profile.css';
import Plot from 'react-plotly.js';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
//column, row, then columns within the row

export default function Basic() {
  return (
    <div className="page" style={{ backgroundColor: '#ffffff' }}>

        <div class = "row-fluid">
          <div class = "container">
                  <div class="profile-pic">
                    <MDBCardImage
                      style={{borderRadius: '50%' }}
                      src={require('../images/download.jpg')}
                      alt='Headshot'
                     flud />
                  </div>

                  <div class="employee">
                  {/* <div className="flex-grow-3 ms-5" width="500px"> */}
                    <h1>Temoc</h1> 
                    <h2> Customer Service Representative</h2>
                    <h4> Team Member since 2006</h4>
                  {/* </div> */}
                  </div>

                  <div class="card text-center">
                   <div class = "card-body">
                   <h1> 86% </h1>
                      <p> Average Customer Satisfaction</p>
                      <a href="./home" class="btn btn-primary">See Conversations</a>
                    </div>                  
                  </div>
                  
          </div> 
          <div class = "row_graph">
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
                    width: 540, 
                    height: 450,
                    xaxis: { title:{ text: 'Time (In Weeks)'} },
                    yaxis: { title:{ text: 'Emotional Satisfaction (Negative: -3 & Positive 3)'} }
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
                    title: 'Employee Performance Over Time',
                    width: 540, 
                    height: 450,
                    xaxis: { title:{ text: 'Time (In Weeks)'} },
                    yaxis: { title:{ text: 'Average Satisfaction (Percentage)'} }
                  } 
                }
            />
          </div>
        </div>
        
    </div>
    
  );
}