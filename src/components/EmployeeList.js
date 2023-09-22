import { useState, useEffect } from "react"
import Employee from "./Employee"

const EmployeeList = (employee) => {
    const [employees, setEmployees] = useState([])


    useEffect(() => {
        const fetchEmployeesByDepartment = async () => {
            const response = await fetch("http://localhost:8080/employees/department/1");
            const data = await response.json();
            setEmployees(data);
        }
        console.log(employees)
        fetchEmployeesByDepartment();
    },[])

    
    

    return(
        <></>
    );
}

export default EmployeeList;