import React from "react";
import "./Modal.css";
import * as AiIcons from "react-icons/ai";


function Modal({closeModal,loggedInEmployee,index,theme}) {
    console.log(loggedInEmployee.department.employees.name);




    return <div className= {`modal-background-${theme}`}>
        <div className={`modal-container-${theme}`}>
            <div className={`title-close-btn-${theme}`}>
                <button onClick={()=>{closeModal(false);
                }}>X</button>
             </div>
                <div className="m-title">
                    <h2>{loggedInEmployee.department.employees[index].name}</h2>
                    <p>{loggedInEmployee.department.employees[index].jobTitle.toLowerCase()}</p>
                    <img className="modal-image" src={`./jobimages/capstone-${loggedInEmployee.department.employees[index].jobTitle}.png`}></img>
                   
                    {/* <h3>Employee details</h3> */}
                </div>
                <div className="m-body">
                <h3>Employee details</h3>
                    <p>Email: {loggedInEmployee.department.employees[index].email}</p>
                    <p>Contract Number: {loggedInEmployee.department.employees[index].contactNumber}</p>
                    
                {/* if(loggedInEmployee.department.employees[index].manager){
                        <p>Is your manager</p> }
                    else{
                     <p>Is not your manager</p>
                     } */}
                </div>
                <div className="m-footer">
                    <button>Call {loggedInEmployee.department.employees[index].name}  <AiIcons.AiFillPhone/> </button>
                    <button id="cancel-btn" onClick={()=>{closeModal(false);
                }}>Close</button>
                </div>
        </div>
    </div>
}

export default Modal;