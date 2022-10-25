import React from "react";
import './student.css';
import Courses from "./courses";
const Student = props => {

    const coursNum = [];
  for (let index = 0; index < props.enrolled; index++) {
    coursNum.push(<Courses enrolled = {index} />);
    
  }

    return (
    <React.Fragment>
    <p> 
        student <b>{props.name}</b> with student number <b>{props.number}</b>
    </p>
    <p>Student is enrolled in</p>
    {coursNum}
    </React.Fragment>
    )
};

export default Student;