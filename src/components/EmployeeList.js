import Modal from "./Modal";
import { useState } from "react";
import "./EmployeeList.css";


const EmployeeList = ({loggedInEmployee,theme}) => {

    const [openModals, setOpenModals] = useState(Array(loggedInEmployee.department.employees.length).fill(false));

    const toggleModal = (index) => {
        // Create a copy of the openModals array
        const newOpenModals = [...openModals];
        // Toggle the modal state for the specific employee at the given index
        newOpenModals[index] = !newOpenModals[index];
        // Update the state
        setOpenModals(newOpenModals);
      };

    // if(loggedInEmployee.id === loggedInEmployee.department.employee[index].id) then display "name (You)"



    if(loggedInEmployee){
        return(
            <>
            <h3>My Team</h3>
            <ul className="employee-list">{loggedInEmployee.department.employees.map((employee, index) => (
             <li className="li-element" key = {index}>{loggedInEmployee.id===employee.id ? employee.name + " (You)" :employee.name }
                <button className="open-modal-btn"  
                onClick={()=>{toggleModal(index)}
                }
                >Open</button>
                {openModals[index] && <Modal theme={theme} index={index} loggedInEmployee={loggedInEmployee} closeModal={()=>{toggleModal(index)}}/>}
             </li>
            ))}</ul>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
    
   }

export default EmployeeList;
