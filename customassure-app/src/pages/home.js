import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
  
const Home = () => {

  const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];  
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <ListGroup>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
    </ListGroup>
  );
};

 



  
export default Home;
