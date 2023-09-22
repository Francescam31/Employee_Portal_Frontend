import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeList from "../components/EmployeeList";

const PortalContainer = () => {
  const [employee, setEmployee] = useState(null);
  // const [team, setTeam] = useState([]);

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
      <h1 className="logo">Rainforest Retail</h1>
      <h2 className="header">Employee Portal</h2>
      {/* <EmployeeList employees={employees}/> Should employees = team */}
      <EmployeeList employee={employee} />
      <Employee employee={employee} />
    </div>
  );
};

export default PortalContainer;
