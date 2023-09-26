import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";
import ShiftForm from "../components/ShiftForm";

const PortalContainer = ({loggedInEmployee}) => {
  const [shifts, setShifts] = useState([]);
  

  const fetchShifts = async () => {
  const response = await fetch("http://localhost:8080/shifts");
  const shiftsData = await response.json();
  setShifts(shiftsData);
  }

  useEffect(() => {
  fetchShifts();
  }, []);

const postShifts = async (addShifts) => {
  const response = await fetch("http://localhost:8080/shifts", {
    method: "POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(addShifts)
  })
  const savedShifts = await response.json();
  setShifts([...shifts, savedShifts])
}

 
  if(!loggedInEmployee) {
    return <p>Return to login</p>
  }

  return (
  <div className="portal-container">
    <h1 className="logo">Rainforest Retail</h1>
    <h2 className="header">Employee Portal</h2>
    <Employee loggedInEmployee={loggedInEmployee}/> 
    <EmployeeList loggedInEmployee={loggedInEmployee}/> 
    <ShiftForm shifts={shifts} postShifts={postShifts}/> 
  </div>
  );
};

export default PortalContainer;
