import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";
import Sidebar from "../components/Sidebar";
import { FaBars } from "react-icons/fa";
import ShiftForm from "../components/ShiftForm";
import EmployeeCalendar from "../components/EmployeeCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../PortalContainer.css';
import { IonIcon } from '@ionic/react';
import { mailOutline, homeOutline, settingsOutline, logOutOutline } from 'ionicons/icons';

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


//   console.log(employee);

const [openSidebar, setOpenSidebar] = useState(false);

const toggleSidebar = () => {
  if(openSidebar){setOpenSidebar(false);}
  else{setOpenSidebar(true);} 
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
    <img className="portal-background" src="/Rainforest.jpeg"></img>
    <div className="header">

    <div className="sidebar-container">
        <FaBars onClick={toggleSidebar} className="sidebar-button" ></FaBars>
        {openSidebar &&  <Sidebar setOpenSidebar={setOpenSidebar}/>}
    </div>

    <a href="/" className="logout-button"><IonIcon icon={logOutOutline}/></a>
    <h1 className="logo-header">Rainforest Retail</h1>
    <img className="logo-image" src="/rainforest retail.png"></img>
    <div className="header-icons">
      <IonIcon icon={mailOutline}/>
      <IonIcon icon={homeOutline}/>
      <IonIcon icon={settingsOutline}/>
      </div>
    

    
    </div>
    <div className="employee">
      <Employee loggedInEmployee={loggedInEmployee}/> 
      </div>
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
