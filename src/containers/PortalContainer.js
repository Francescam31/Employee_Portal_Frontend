import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";
import ShiftForm from "../components/ShiftForm";
import EmployeeCalendar from "../components/EmployeeCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
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
    <div className="header">
    <a href="/" className="logout-button"><button>Log out</button></a>
    <h1 className="logo-header">Rainforest Retail</h1>
    <img className="logo-image" src="/rainforest retail.png"></img>
    </div>
      <Employee loggedInEmployee={loggedInEmployee}/> 

      <div className="component-tiles">
    <div className="box">
            <div className="shift-title">
                <h2>Shifts</h2>
            </div>
        <ul className="shifts-list">
                {loggedInEmployee.shifts.map((shift, index) => (
                    <li key={index}>{shift.date}:{shift.type}</li>
                ))}
        </ul>
        </div>
      
      <div className="box"> 
        <EmployeeCalendar loggedInEmployee={loggedInEmployee} />
      </div>

      <div className="box">
      <ShiftForm postShift={postShift} /> 
      </div>

  </div>

  <div className="team-box">
      <EmployeeList loggedInEmployee={loggedInEmployee}/> 
      </div>

  </div>
  );
};

export default PortalContainer;
