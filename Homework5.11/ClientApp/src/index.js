import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDom from 'react-dom';
import NumberCenter from './NumberCenter';

ReactDom.render(<NumberCenter />, document.getElementById('root'));

//Random number between 1 - 10,000 - Math.floor(Math.random() * 10000) + 1;

//Create a React application that has an "Add Number" button on top with a <table> underneath.
//The table should have two columns: Number and "Add/Remove". Beneath the table there 
//should be a <ul> titled: "Added numbers"
//Here's how it should work:
//As the user presses the "Add Number" button on top, a new row should be added to the table
//with a random number in the first column, and an Add button in the second column.
//When the user clicks on the Add button of any given row, that number should
//show up in the ul underneath, and the add button should change to show "Remove". If
//they then click "Remove" then that number should get removed from the ul, and the button
//should flip back to saying "Add"


