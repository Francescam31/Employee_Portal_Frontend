import { useEffect, useState } from "react";
import Employee from "../components/Employee";

const PortalContainer = () => {
  const [employee, setEmployee] = useState(null);
  const [team, setTeam] = useState([]);

  const fetchEmployee = async () => {
    const response = await fetch("http://localhost:8080/employees/1");
    const data = await response.json();
    setEmployee(data);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  console.log(employee);

  
  return (
  <div className="portal-container">
    <h1>Rainforest Retail</h1>
    <h2>Employee Portal</h2>
    {/* <EmployeeList employees={employees}/> Should employees = team */}
    {employee ? <Employee employee={employee}/> : <p>Loading data...</p>}
     
  </div>
  );
};

export default PortalContainer;
