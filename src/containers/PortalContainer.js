import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";
import ShiftForm from "../components/ShiftForm";
import '../PortalContainer.css';

const PortalContainer = ({loggedInEmployee, updateShifts}) => {
  const [shifts, setShifts] = useState([]);
  

  const fetchShifts = async () => {
  const response = await fetch("http://localhost:8080/shifts");
  const shiftsData = await response.json();
  setShifts(shiftsData);
  }

  useEffect(() => {
  fetchShifts();
  }, []);

const postShift = async (newShift) => {
  newShift.employeeId = loggedInEmployee.id;
  const response = await fetch("http://localhost:8080/shifts", {
    method: "POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(newShift)
  })
  const savedShift = await response.json();
  updateShifts(savedShift)
}

 
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
    <a href="/" className="logout-button"><button>Log out</button></a>
    <div className="logo">
    <h1 className="logo-header">Rainforest Retail</h1>
    <img></img>
        <img className="logo-image" src="/rainforest retail.png"></img>
    </div>
    {/* <h2 className="header">Employee Portal</h2> */}
    <Employee loggedInEmployee={loggedInEmployee}/> 
    <ShiftForm loggedInEmployee={loggedInEmployee} postShift={postShift} /> 
    <EmployeeList loggedInEmployee={loggedInEmployee}/> 
    
  </div>
  );
};

export default PortalContainer;
