const TeamModal = ({loggedInEmployee}) =>{


    const[open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const displayMessage =() =>{
        <div>
        {/* <message></message> */}
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