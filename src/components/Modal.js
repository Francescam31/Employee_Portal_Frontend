import React from "react";
import "./Modal.css";
import * as AiIcons from "react-icons/ai";


function Modal({closeModal,loggedInEmployee,index}) {
    console.log(loggedInEmployee.department.employees.name);


    // if(loggedInEmployee.manager){
    //     let statement = ""
    // }


    return <div className="modal-background">
        <div className="modal-container">
            <div className="title-close-btn">
                <button onClick={()=>{closeModal(false);
                }}>X</button>
             </div>
                <div className="m-title">
                    <h2>{loggedInEmployee.department.employees[index].name}</h2>
                    <p>{loggedInEmployee.department.employees[index].jobTitle.toLowerCase()}</p>
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