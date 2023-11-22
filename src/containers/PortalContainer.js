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
import { calendar, home, logOut, people, settingsSharp} from 'ionicons/icons';
import "../ThemeButton.css";
import MonthlyWage from "../components/MonthlyWage";
import { Link} from "react-scroll";

const PortalContainer = ({loggedInEmployee, addShift, removeShift, toggleTheme, theme, openSidebar, toggleSidebar}) => {
  const [shifts, setShifts] = useState([]);
  const [shiftHistory, setShiftHistory] = useState([]);
  const [upcomingShifts, setUpcomingShifts] = useState([]);

  const fetchShifts = async () => {
  const response = await fetch("http://localhost:8080/shifts");
  const shiftsData = await response.json();
  setShifts(shiftsData);
  }

  useEffect(() => {
  fetchShifts();
  }, [shifts]);

  const postShift = async (newShift) => {
  newShift.employeeId = loggedInEmployee.id;
  const response = await fetch("http://localhost:8080/shifts", {
    method: "POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(newShift)
  })
  const savedShift = await response.json();
  addShift(savedShift)
}

  // deleteShift 
  // takes in the shift id
  const deleteShift = async (id) => {
    // delete from the db 
    await fetch(`http://localhost:8080/shifts/${id}`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    })
    // delete locally
    // const response = await fetch("http://localhost:8080/shifts")
    // const savedShift = await response.json();
    // updateShifts([...savedShift])
    // updateShifts(shifts.filter((shift) => shift.id !== id));
    removeShift(shifts.filter((shift) => shift.id == id));
  }

  // shift history  
  useEffect(() => {
    if(loggedInEmployee) {
      let shiftHistoryList = [];
      for (let i = 0; i<loggedInEmployee.shifts.length; i++){
        if(new Date(loggedInEmployee.shifts[i].date) <= new Date()){
          shiftHistoryList.push(loggedInEmployee.shifts[i]);
        }
      } shiftHistoryList.sort((a,b) => new Date(a.date) - new Date(b.date));
      setShiftHistory(shiftHistoryList);
  }
  }, [loggedInEmployee]);

  // upcoming shift array
  useEffect(() => {
    if(loggedInEmployee) {
      let upcomingShiftList = [];
      for (let i = 0; i<loggedInEmployee.shifts.length; i++){
        if(new Date(loggedInEmployee.shifts[i].date) > new Date()){
          upcomingShiftList .push(loggedInEmployee.shifts[i]);
        }
      } upcomingShiftList.sort((a,b) => new Date(a.date) - new Date(b.date));
      setUpcomingShifts(upcomingShiftList );
  }
  }, [loggedInEmployee]);




  if(!loggedInEmployee) {
    return (
      <>
        <p>Return to login</p>
        <a href="/"><button className="general-button" >Log out</button></a>
      </>
    )
  }

  return (

  <div id="home-employee" className="portal-container">
    <img className="portal-background" src="/Rainforest.jpeg"></img>
    <div className={`header-${theme}`}>

      <FaBars onClick={toggleSidebar} className="sidebar-button" ></FaBars>

    {/* <div className="page-header"> */}
      
      <div className="logo">
        <h1 className="logo-header" >Rainforest Retail</h1>
        <img className="logo-image" src="/croc logo.png"></img>
        <h1 className="logo-header" >Employee Portal</h1>
      </div>

      <div className="header-icons">
        <Link to="home-employee" spy={true} smooth={true} offset={0} duration={500} > 
          <IonIcon icon={home}/>
        </Link>

        <Link to="home-calendar" spy={true} smooth={true} offset={-200} duration={500} > 
          <IonIcon icon={calendar}/>
        </Link>

        <Link to="home-employee-list" spy={true} smooth={true} offset={0} duration={500} > 
          <IonIcon icon={people} />
        </Link>
        <IonIcon icon={settingsSharp}/>    
        <a href="/" className="logout-button"><IonIcon icon={logOut}/></a>
      </div>
    
    {/* </div> */}

        {/* dark and light mode theme button */}
        <button className="mode-btn"onClick={toggleTheme}>{theme} mode</button>
    </div>
    
    <div   className="portal-page">
      <div className={`"sidebar-container-${theme}`}>
        {openSidebar &&  <Sidebar theme={theme} openSidebar={openSidebar}/>}
      </div>

      <div className="page-elements">

        <div  className="employee">
          <Employee loggedInEmployee={loggedInEmployee}/> 
        </div>

      
        <div id="home-calendar" className={`calendar-box-${theme}`}> 
          <EmployeeCalendar loggedInEmployee={loggedInEmployee} />
        </div>

        <div className="component-tiles">
          <div className="shift-boxes"> 
            <div className={`box-${theme}`} id="box1">
              <ShiftForm postShift={postShift} /> 
            </div>

      {/* Shift history */}
            <div className={`box-${theme}`} id="box2">
              <div className="shift-title">
                <h2> Past Shifts</h2>
              </div>
              <ul className="shifts-list">
                  {shiftHistory.map((shift, index) => ( // shift history
                      <li key={index}>{new Date(shift.date).toLocaleString("default", {month:"short"})} {new Date(shift.date).toLocaleString("default", {day:"2-digit"})} - {shift.type}</li>
                  ))} 
              </ul>
            </div>

      {/* Upcoming Shifts */}
            <div className={`box-${theme}`} id="box2">
              <div className="shift-title">
                <h2>Upcoming Shifts</h2>
              </div>
              <ul className="shifts-list">
                  {upcomingShifts.map((shift,index)=> (
                    <li key={index}>{shift.id} {new Date(shift.date).toLocaleString("default", {month:"short"})} {new Date(shift.date).toLocaleString("default", {day:"2-digit"})} - {shift.type} <button className="general-button" onClick={() =>{deleteShift(shift.id)}}>Delete</button></li>
                  )
                  )}
              </ul>
            </div>

          </div>
        </div> {/*component-tiles */}

        <div className="more-boxes">
          <div  id="home-employee-list" className={`team-box-${theme}`}>
            <EmployeeList theme={theme} loggedInEmployee={loggedInEmployee}/> 
          </div>

          <div className={`current-month-wage-${theme}`}>
            <MonthlyWage loggedInEmployee={loggedInEmployee} shift/>
          </div>

        </div>
        
      </div> {/*page-elements */}

    </div>
  </div>
  );
};

export default PortalContainer;
