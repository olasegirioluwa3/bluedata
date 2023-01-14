import React from "react";
//import ReactDOM from "react-dom/client";
//import HowWeWork from "./../components/HowWeWork";
//import Exam from "./../components/Exam";
//import Button from "react-bootstrap/Button";

class About extends React.Component{
    constructor(props){
      super(props);
      this.state = ({question: ''});
    }
    render(){
        //general website info
        var info = {
            name: "Earlyschool CBT", 
            desc: "excellence in examination"
        };
        return (
            <div>
                <h1>{info.name} About</h1>
                <p>go to </p>
                
            </div>
        );
    }
}
export default About;