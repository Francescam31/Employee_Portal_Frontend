const Employee = ({employee}) =>{

console.log(employee);

if(!employee){
    return <p>loading data</p>
}

return(
    <div className="Employee">
        <h2>{employee.id}</h2>
        <h3 className="Employee-name">{employee.name}</h3>
        <h3 className="Employee-email">{employee.email}</h3>
        <h3 className="Employee-department-name">{employee.department.name}</h3>
        <p>{employee.contactNumber}</p>
    </div>
)

}

export default Employee;