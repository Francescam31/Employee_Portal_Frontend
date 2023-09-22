const Employee = ({employee}) =>{

console.log(employee);

if(!employee){
    return <p>loading data</p>
}

return(
    <div className="Employee">
        <h4>Employee id: {employee.id}</h4>
        <h3 className="Employee-name">Name: {employee.name}</h3>
        <h3 className="Employee-email">Email: {employee.email}</h3>
        <h3 className="Employee-department-name">Department: {employee.department.name}</h3>
        <p>Contact Number: {employee.contactNumber}</p>
        <p>Wage: £{employee.hourlyWage}ph</p>
    </div>
)

}

export default Employee;