const EmployeeList = ({loggedInEmployee}) => {

    if(loggedInEmployee){
        return(
            <>
            <h3>My Team</h3>
            <ul className="employee-list">{loggedInEmployee.department.employees.map((employee, index) => (
                <li key = {index}>{employee.name}:{employee.email}</li>))}</ul>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
    
   }

export default EmployeeList;
