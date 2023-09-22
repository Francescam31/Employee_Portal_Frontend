const EmployeeList = ({employee}) => {

    if(employee){
        return(
            <>
            <h3>My Department: {employee.department.name}</h3>
            <ul className="employee-list">{employee.department.employees.map((employee, index) => (
                <li key = {index}>{employee.name}</li>))}</ul>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
    
   }

export default EmployeeList;