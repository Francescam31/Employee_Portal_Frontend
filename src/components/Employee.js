const Employee = ({loggedInEmployee}) =>{

console.log(loggedInEmployee);

if(!loggedInEmployee){
    return <p>loading data</p>
}

return(
    <div className="Employee">
        <h4>Employee id: {loggedInEmployee.id}</h4>
        <h3 className="Employee-name">Name: {loggedInEmployee.name}</h3>
        <h3 className="Employee-email">Email: {loggedInEmployee.email}</h3>
        <h3 className="Employee-department-name">Department: {loggedInEmployee.department.name}</h3>
        <p>Contact Number: {loggedInEmployee.contactNumber}</p>
        <p>Wage: £{loggedInEmployee.hourlyWage}ph</p>
    </div>
)

}

export default Employee;