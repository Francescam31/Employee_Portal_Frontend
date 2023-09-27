import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";

const PortalContainer = ({loggedInEmployee}) => {
 
  if(!loggedInEmployee) {
    return (
      <>
        <p>Return to login</p>
        <a href="/"><button>Log out</button></a>
      </>
    )
  }

  return (
  <div className="portal-container">
    <a href="/"><button>Log out</button></a>
    <h1 className="logo">Rainforest Retail</h1>
    <h2 className="header">Employee Portal</h2>
    <Employee loggedInEmployee={loggedInEmployee}/> 
    <EmployeeList loggedInEmployee={loggedInEmployee}/>  
  </div>
  );
};

export default PortalContainer;
