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
      if(getPassword === '0987' && adminPassword !== ''){
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
            placeholder="Use 0987 to test"
            />
            <button className='adminSubmit-btn'>Submit</button>
            </form>
          </Typography>
        </Box>
      </Modal>
      <div className='adminDashboardWrapper'>
        <div className='adminDashboard-top'>
          <div className='adminDashboard-top_divs'>
             <img src='data:image/png;base64,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' alt='img' className='adminDashboard-top_img'/>
             <div className='adminDashboard-top_div'>
              <h2>Users:</h2>
              <h3>{300}</h3>
             </div>
          </div>
          <div className='adminDashboard-top_divs'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4N2fO2Zee_yjQGo8LTd1kxAjTnY5OQ0mwFQ&usqp=CAU' alt='img' className='adminDashboard-top_img'/>
          <div className='adminDashboard-top_div'>
            <h2>Active Users:</h2>
            <h3>{300}</h3>
          </div>
            
          </div>
          <div className='adminDashboard-top_divs'>
          <img src='' alt='img' className='adminDashboard-top_img'/>
          <div className='adminDashboard-top_div'>
            <h2>Users:</h2>
            <h3>{300}</h3>
          </div>
            
          </div>
        </div>
        <div className='adminDashboard-bottom'>
     
        </div>
      </div>
    </div>
  );
}
export default Admin;
