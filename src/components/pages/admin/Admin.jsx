import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./Admin.css";

function Admin() {
  // States
  const [open, setOpen] = useState(false);
  const [getPassword, setGetPassword] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [wrongPassword, setWrongPassword] = useState(false)
  // Handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setGetPassword(e.target.value)
    setAdminPassword(getPassword)
  }
  const handlePasswordSubmit = (e) => {
    e.preventDefault()
      setAdminPassword(getPassword)
      if(getPassword === '0987654567890' && getPassword !== ''){
        handleClose()
      }else{
        setWrongPassword(true)
      }
  }
  const style = {
    marginTop: "300px",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #2f8aa5",
    boxShadow: 24,
    p: 4,
    outline: "none",
    marginLeft: "50%",
    borderRadius: "10px",
  };

  // useEffect
  useEffect(() => {
    handleOpen();
  }, []);
  return (
    <div className="adminWrapper">
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modeBox">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="modeBox-notifications_flex">
            {
              wrongPassword ?
              <h2 className="modeBox-notifications">Enter valid admin password!</h2> :
              <h2 className="modeBox-notifications">Enter admin password:</h2> 
            }
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handlePasswordSubmit} className='adminForm'>
            <input 
            type="text/number" 
            className="adminInput" 
            onChange={handleChange}
            />
            <button className='adminSubmit-btn'>Submit</button>
            </form>
          </Typography>
        </Box>
      </Modal>
      <h1>Admin</h1>
    </div>
  );
}
export default Admin;
