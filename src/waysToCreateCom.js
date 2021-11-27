import React, { Component } from "react"

// CreateClass Component
var HelloWorld = React.createClass({
 render: function () {
  return (
    <h1>Hello World</h1>
  );
 }  
});

// JS Class Component
class HelloWorld1 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>Hello World</h1>
        );
    }
}

// Function Component

function HelloWorld2(props){
    return (
        <h1>Hello World</h1>
    );
}

// Arrow Functional Component
const HelloWorld3 = (props) => <h1>Hello World</h1>



// Functional Component are better than Class Component
// * Easier to Understand
// Avoid 'this' keyword
// less transpiled code
// high signal-to-noise ratio
// Easy to test
// Performance
// class may be removed in future

// class    vs   functional
// Use React Hooks (for functional components)


// Container vs Components
// container are backend to our frontEnd
// container are statefull
// pass data and actions down
// knows about redux
// often stateful



