const EmployeeList = ({ employee }) => {
  if (employee) {
    return (
      <>
        <ul className="Employee-List">
          {employee.department.employees.map((employee, index) => (
            <li key={index}>{employee.name}</li>
          ))}
        </ul>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default EmployeeList;
