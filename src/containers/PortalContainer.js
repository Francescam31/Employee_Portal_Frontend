import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";

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
  if(!loggedInEmployee) {
    return <p>Return to login</p>
  }

  return (
  <div className="portal-container">
    <h1 className="logo">Rainforest Retail</h1>
    <h2 className="header">Employee Portal</h2>
    {/* <EmployeeList employeeloggedInEmployeeyees}/> Should employees = team */}
    <EmployeeList loggedInEmployee={loggedInEmployee}/>
    <Employee loggedInEmployee={loggedInEmployee}/> 
     
  </div>
  );
};

export default PortalContainer;
