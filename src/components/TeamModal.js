const TeamModal = ({loggedInEmployee}) =>{


    const[open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const displayMessage =() =>{
        <div>
        <p>{loggedInEmployee.department.employees.name}</p>
        <p>{loggedInEmployee.department.employees.email}</p>
        <p>{loggedInEmployee.department.employees.contactNumber}</p>
        if(loggedInEmployee.department.employees.manager){
             <p>Is your manager</p> }
        else{
            <p>Is not your manager</p>
        }
        </div>
    }


    return(<div>
         <Button id="team-info-button" variant= "contained" onClick={handleOpen}>Information</Button>
         <Modal
        open={open}
        onClose={handleClose}
      ></Modal>
    </div>)

}
export default TeamModal;