const EmployeeList = ({employee}) => {

    if(employee){
        return(
            <>
            <ul>{employee.department.employees.map((employee, index) => (
                <li key = {index}>{employee.name}</li>))}</ul>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
    
   }

export default EmployeeList;