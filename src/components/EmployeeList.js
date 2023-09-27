import Modal from "./Modal";
import { useState } from "react";


const EmployeeList = ({loggedInEmployee}) => {

    const [openModals, setOpenModals] = useState(Array(loggedInEmployee.department.employees.length).fill(false));

    const toggleModal = (index) => {
        // Create a copy of the openModals array
        const newOpenModals = [...openModals];
        // Toggle the modal state for the specific employee at the given index
        newOpenModals[index] = !newOpenModals[index];
        // Update the state
        setOpenModals(newOpenModals);
      };


    if(loggedInEmployee){
        return(
            <>
            <h3>My Department: {loggedInEmployee.department.name}</h3>
            <ul className="employee-list">{loggedInEmployee.department.employees.map((employee, index) => (
             <li key = {index}>{employee.name}
                <button className="open-modal-btn"  
                onClick={()=>{toggleModal(index)}
                }
                >Open</button>
                {openModals[index] && <Modal index={index} loggedInEmployee={loggedInEmployee} closeModal={()=>{toggleModal(index)}}/>}
             </li>
            ))}</ul>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
    
   }

export default EmployeeList;
