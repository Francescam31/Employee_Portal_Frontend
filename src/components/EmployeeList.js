import Modal from "./Modal";
const EmployeeList = ({loggedInEmployee}) => {

    if(loggedInEmployee){
        return(
            <>
            <h3>My Department: {loggedInEmployee.department.name}</h3>
            <ul className="employee-list">{loggedInEmployee.department.employees.map((employee, index) => (
                <li key = {index}>{employee.name}</li>))}</ul>
            <Modal/>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
    
   }

export default EmployeeList;
