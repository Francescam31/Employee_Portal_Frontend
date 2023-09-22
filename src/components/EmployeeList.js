
const EmployeeList = ({employee}) => {


        // const employeeComponent = employee.department.map(employee => {
        // return <Employee 
        // key ={employee.department.id}
        // employee={employee}/>
        // });
   

console.log("Employee List", employee)
    if(!employee){
        return <p>Loading data...</p>
    }
    

    return(
        <>
        <ul>{employee.department.employees.map((employee, index) => (
            <li key = {index}>{employee.name}</li>))}</ul>
        </>
    );
   }

export default EmployeeList;