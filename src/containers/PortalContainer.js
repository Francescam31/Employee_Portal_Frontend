import { useEffect, useState } from "react";

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

  return <div></div>;
};

export default PortalContainer;
