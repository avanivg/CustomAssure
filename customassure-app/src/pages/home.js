import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import './home.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
  
const Home = () => {

  return (
<div class = "home">
  <div class="list-group list-group-light">
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="negative">
    Baron Tran
    <small>Active Now</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="negative">
    Noah Bowman
    <small>Satisfaction Score: -3 </small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action px-4 rounded-4 d-flex justify-content-between align-items-center" id="negative">
     Avani Garde
     <small>Satisfaction Score: -3</small>
     </a>
     <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="negative">
    Neha Peddireddy
    <small>Satisfaction Score: -2.5</small>
    </a>
     <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex px-4 justify-content-between align-items-center" id="negative">
    Grace Yang
    <small>Satisfaction Score: -1 </small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="neutral">
    Capital One
    <small>Satisfaction Score: 0</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="neutral">
    Shagun Dalal
    <small>Satisfaction Score: 0</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="neutral">
    Toyota
    <small>Satisfaction Score: 0</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="neutral">
    State Farm
    <small>Satisfaction Score: 0</small>
    </a> 
   
    <a href="./profile" class="list-group-item list-group-item-action px-4 rounded-4 d-flex justify-content-between align-items-center" id="positive" >
     Gayathri Vijayakumar
     <small>Satisfaction Score: 1</small>
     </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="positive" >
    Ring Central
    <small>Satisfaction Score: 1.5</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="positive">
    CBRE
    <small>Satisfaction Score: 2</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="positive">
    Fidelity
    <small>Satisfaction Score: 2.5</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="positive">
    ACM
    <small>Satisfaction Score: 3</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center" id="positive">
    Nebula
    <small>Satisfaction Score: 3</small>
    </a>
  </div>
  <div class = "chatbot">
      <header className="App-header">
      <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
      </div>
   </div> 

  );


};

 



  
export default Home;
