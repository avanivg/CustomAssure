import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './home.css';
  
const Home = () => {

  return (

  <div class="list-group list-group-light">
    <a href="./profile" class="list-group-item list-group-item-action px-4 border-0 rounded-3 mb-2 list-group-item-success d-flex justify-content-between align-items-center">
     Customer 1
     <span class="badge badge-primary badge-pill">14</span>
     </a>
    <a href="#" class="list-group-item list-group-item-action px-4 border-0 rounded-3 mb-2 list-group-item-danger d-flex justify-content-between align-items-center">
     Customer 2
     <span class="badge badge-primary badge-pill">2</span>
     </a>
    <a href="#" class="list-group-item list-group-item-action px-4 border-0 rounded-3 mb-2 list-group-item-warning d-flex justify-content-between align-items-center">
      Customer 3
      <span class="badge badge-primary badge-pill">2</span>
      </a>
  </div>

  );


};

 



  
export default Home;
