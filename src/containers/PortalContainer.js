import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";
import Sidebar from "../components/Sidebar";
import { FaBars } from "react-icons/fa";

const PortalContainer = ({loggedInEmployee}) => {
  // const [team, setTeam] = useState([]);

//   const fetchEmployee = async () => {
//     const response = await fetch("http://localhost:8080/employees");
//     const data = await response.json();
//     setEmployee(data);
//   };


//   useEffect(() => {
//     fetchEmployee();
//   }, []);

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
    <div className="portal-page">
      <div className="sidebar-container">
        <FaBars onClick={toggleSidebar}></FaBars>
        {openSidebar &&  <Sidebar setOpenSidebar={setOpenSidebar}/>}
      </div>
      <div className="portal-container">
          <a href="/"><button>Log out</button></a>
          <h1 className="logo">Rainforest Retail</h1>
          <h2 className="header">Employee Portal</h2>
          <Employee loggedInEmployee={loggedInEmployee}/> 
          <EmployeeList loggedInEmployee={loggedInEmployee}/>  
      </div>
    </div>
  );
};

export default PortalContainer;
