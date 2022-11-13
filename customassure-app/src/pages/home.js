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
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Baron Tran
    <small>Active Now</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Noah Bowman
    <small>Last active: 4 hours ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action px-4 rounded-4 d-flex justify-content-between align-items-center">
     Avani Garde
     <small>Last active: 7 hours ago</small>
     </a>
     <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Neha Peddireddy
    <small>Last active: 12 hours ago</small>
    </a>
     <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex px-4 justify-content-between align-items-center">
    Grace Yang
    <small>Last active: 2 days ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Capital One
    <small>Last active: 3 days ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Shagun Dalal
    <small>Last active: 5 days ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Toyota
    <small>Last active: 5 days ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    State Farm
    <small>Last active: 6 days ago</small>
    </a>
    
   
   
    <a href="./profile" class="list-group-item list-group-item-action px-4 rounded-4 d-flex justify-content-between align-items-center">
     Gayathri Vijayakumar
     <small>Last active: 7 days ago</small>
     </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Ring Central
    <small>Last active: 8 days ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    CBRE
    <small>Last active: 9 days ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Fidelity
    <small>Last active: 9 days ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    ACM
    <small>Last active: 11 days ago</small>
    </a>
    <a href="./profile" class="list-group-item list-group-item-action rounded-4 d-flex  px-4 justify-content-between align-items-center">
    Nebula
    <small>Last active: 15 days ago</small>
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
